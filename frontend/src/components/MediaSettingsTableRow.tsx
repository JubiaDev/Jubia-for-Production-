/*import React from 'react';
import { MediaSetting } from '../APIs/media-settings';
import { Edit, Trash2 } from 'lucide-react';

interface MediaSettingsTableRowProps {
  setting: MediaSetting;
  sortValue: number;
  onEdit: (setting: MediaSetting) => void;
  onDelete: (id: number) => void;
  onSortChange: (id: number, value: number) => void;
}

const MediaSettingsTableRow: React.FC<MediaSettingsTableRowProps> = ({
  setting,
  sortValue,
  onEdit,
  onDelete,
  onSortChange
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm mb-2">
    
      <div className="grid grid-cols-11 gap-2 p-2">
        {[
          setting.catalogue, setting.kind, setting.size, 
          setting.weight, setting.surface, setting.color, 
          setting.shape, setting.thickness, setting.brand, 
          setting.tradingUnit, setting.packageUnit
        ].map((value, index) => (
          <div key={index} className="text-sm text-gray-600 truncate text-center">
            {value || '-'}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 p-3 bg-gray-50 border-t">
        <div>
          <div className="text-xs text-gray-500">En. Name</div>
          <div className="font-medium">{setting.englishName}</div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500">Ar. Name</div>
          <div className="font-medium text-right" dir="rtl">{setting.arabicName}</div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500">Sorting</div>
          <input
            type="number"
            value={sortValue}
            onChange={(e) => onSortChange(setting.id, parseInt(e.target.value) || 0)}
            className="w-full p-1 border border-gray-300 rounded text-center"
          />
        </div>
        
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => onEdit(setting)}
            className="text-blue-600 hover:text-blue-800"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(setting.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaSettingsTableRow;*/