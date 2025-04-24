using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vacation.Data.Models;
using vacation.Logic.ViewModels;

namespace vacation.Logic.Repositories.Contracts.Admin
{
    public interface IArea
    {
        List<AreaVM> GetAreas();
        AreaVM AddArea(AreaVM model);
        AreaVM UpdateArea(AreaVM model);        
        int DeleteArea(int id);
        int EnableArea(int id);
        byte[] ExportAreas();
    }
}
