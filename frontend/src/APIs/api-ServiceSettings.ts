const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Service row for main tabs
export interface ServiceSettingRow {
  id: number;
  englishName: string;
  arabicName: string;
  sorting: number;
}

// Attribute detail row
export interface AttributeDetail {
  id: number;
  englishName: string;
  arabicName: string;
  sorting: number;
}

// Tab names and endpoints for dynamic API use
export const SERVICE_TABS = [
  { name: "Catalogue", endpoint: "ServiceCatalogues" },
  { name: "Kind", endpoint: "ServiceKinds" },
  { name: "Size", endpoint: "ServiceSizes" },
  { name: "Attributes", endpoint: "ServiceAttributes" },
];

// Basic fetch helper for CORS
export const fetchWithCors = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    ...options,
    mode: 'cors',
    credentials: 'include',
  });

  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch {
      errorData = { message: 'Request failed' };
    }
    throw new Error(errorData.message || 'Request failed');
  }

  // Only parse JSON if content is present
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } else {
    return null;
  }
};

// ---------- MAIN TAB CRUD ----------

// Fetch all rows for a given endpoint
export async function fetchRows(endpoint: string): Promise<ServiceSettingRow[]> {
  return fetchWithCors(`${API_BASE_URL}/${endpoint}`);
}

// Create a row for a given endpoint
export async function createRow(endpoint: string, data: Partial<ServiceSettingRow>): Promise<ServiceSettingRow> {
  // On attributes, validate required fields before request
  if (
    endpoint === "ServiceAttributes" &&
    (!data.englishName || !data.arabicName)
  ) {
    throw new Error("EnglishName and ArabicName are required");
  }

  // Add this check for ServiceCatalogues
  if (
    endpoint === "ServiceCatalogues" &&
    (!data.englishName || !data.arabicName)
  ) {
    throw new Error("EnglishName and ArabicName are required for ServiceCatalogues");
  }

  return fetchWithCors(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

// Update a row for a given endpoint
export async function updateRow(endpoint: string, id: number, data: Partial<ServiceSettingRow>): Promise<void> {
  await fetchWithCors(`${API_BASE_URL}/${endpoint}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

// Delete a row for a given endpoint
export async function deleteRow(endpoint: string, id: number): Promise<void> {
  await fetchWithCors(`${API_BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  });
}

// ---------- ATTRIBUTE DETAILS CRUD ----------

// Fetch attribute details
export async function fetchAttributeDetails(attributeId: number): Promise<AttributeDetail[]> {
  return fetchWithCors(`${API_BASE_URL}/ServiceAttributes/${attributeId}/details`);
}

// Create attribute detail
export async function createAttributeDetail(attributeId: number, data: Partial<AttributeDetail>): Promise<AttributeDetail> {
  if (!data.englishName || !data.arabicName) {
    throw new Error("EnglishName and ArabicName are required");
  }
  return fetchWithCors(`${API_BASE_URL}/ServiceAttributes/${attributeId}/details`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

// Update attribute detail
export async function updateAttributeDetail(detailId: number, data: Partial<AttributeDetail>): Promise<void> {
  await fetchWithCors(`${API_BASE_URL}/ServiceAttributes/details/${detailId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

// Delete attribute detail
export async function deleteAttributeDetail(detailId: number): Promise<void> {
  await fetchWithCors(`${API_BASE_URL}/ServiceAttributes/details/${detailId}`, {
    method: "DELETE",
  });
}