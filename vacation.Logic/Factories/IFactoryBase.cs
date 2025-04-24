using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vacation.Logic.Factories
{
    public interface IFactoryBase<T1, T2>
    {
        List<T1> GetEntityListFromModelList(List<T2> listModel);
        List<T2> GetModelListFromEntityList(List<T1> listEntity);
        T1 GetEntityFromModel(T2 model);
        T2 GetModelFromEntity(T1 entity);
    }
}
