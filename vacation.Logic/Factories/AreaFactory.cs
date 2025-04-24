using Microsoft.EntityFrameworkCore;
using vacation.Data.Models;
using vacation.Logic.ViewModels;

namespace vacation.Logic.Factories
{
    public class AreaFactory : IFactoryBase<Area, AreaVM>
    {
        public Area GetEntityFromModel(AreaVM model)
        {
            return new Area()
            {
                IdArea = model.idArea,
                Description = model.description,
                Active = model.active,
            };
        }

        public List<Area> GetEntityListFromModelList(List<AreaVM> listModel)
        {
            throw new NotImplementedException();
        }

        public AreaVM GetModelFromEntity(Area entity)
        {
            return new AreaVM()
            {
                idArea = entity.IdArea,
                description = entity.Description,
                active = entity.Active,
            };
        }

        public List<AreaVM> GetModelListFromEntityList(List<Area> listEntity)
        {
            return listEntity.Select(el => new AreaVM()
            {
                idArea = el.IdArea,
                description = el.Description,
                active = el.Active
            }).ToList();
        }
    }
}
