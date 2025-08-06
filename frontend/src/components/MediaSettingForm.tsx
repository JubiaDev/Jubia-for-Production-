/*import React from 'react';
import { MediaSetting } from "../APIs/media-settings";

interface MediaSettingFormProps {
  setting: Partial<MediaSetting>;
  onChange: (updates: Partial<MediaSetting>) => void;
  onSave: () => void;
  onCancel?: () => void;
  isEditing?: boolean;
}

const MediaSettingForm: React.FC<MediaSettingFormProps> = ({ 
  setting, 
  onChange, 
  onSave,
  onCancel,
  isEditing = false
}) => {
  const handleChange = (field: keyof MediaSetting, value: string | number) => {
    onChange({ ...setting, [field]: value });
  };

  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            English Name *
          </label>
          <input
            type="text"
            value={setting.englishName || ''}
            onChange={(e) => handleChange('englishName', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Arabic Name *
          </label>
          <input
            type="text"
            value={setting.arabicName || ''}
            onChange={(e) => handleChange('arabicName', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-right"
            dir="rtl"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { id: 'catalogue', label: 'Catalogue' },
          { id: 'kind', label: 'Kind' },
          { id: 'size', label: 'Size' },
          { id: 'weight', label: 'Weight' },
          { id: 'surface', label: 'Surface' },
          { id: 'color', label: 'Color' },
          { id: 'shape', label: 'Shape' },
          { id: 'thickness', label: 'Thickness' },
          { id: 'brand', label: 'Brand' },
        ].map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type="text"
              value={(setting as any)[field.id] || ''}
              onChange={(e) => handleChange(field.id as keyof MediaSetting, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trading Unit
          </label>
          <input
            type="text"
            value={setting.tradingUnit || ''}
            onChange={(e) => handleChange('tradingUnit', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Package Unit
          </label>
          <input
            type="text"
            value={setting.packageUnit || ''}
            onChange={(e) => handleChange('packageUnit', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sorting Order
          </label>
          <input
            type="number"
            value={setting.sorting || 0}
            onChange={(e) => handleChange('sorting', parseInt(e.target.value) || 0)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      
      <div className="flex justify-end gap-3 pt-4">
        <button
          onClick={() => onChange({
            catalogue: '',
            kind: '',
            size: '',
            weight: '',
            surface: '',
            color: '',
            shape: '',
            thickness: '',
            brand: '',
            tradingUnit: '',
            packageUnit: '',
            englishName: '',
            arabicName: '',
            sorting: 0
          })}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
        >
          Clear
        </button>
        
        {onCancel && (
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            Cancel
          </button>
        )}
        
        <button
          onClick={onSave}
          disabled={!setting.englishName || !setting.arabicName}
          className={`${
            setting.englishName && setting.arabicName
              ? 'bg-yellow-600 hover:bg-yellow-700'
              : 'bg-gray-300'
          } text-white px-6 py-2 rounded`}
        >
          {isEditing ? 'Save Changes' : 'Add Item'}
        </button>
      </div>
    </div>
  );
};

export default MediaSettingForm;*/