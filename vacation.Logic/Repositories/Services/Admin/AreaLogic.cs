using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OfficeOpenXml;
using System.Data;
using vacation.Data;
using vacation.Data.Models;
using vacation.Logic.Factories;
using vacation.Logic.Helper;
using vacation.Logic.Repositories.Contracts.Admin;
using vacation.Logic.ViewModels;

namespace vacation.Logic.Repositories.Services.Admin
{
    public class AreaLogic : IArea
    {
        private readonly VacationContext context;
        private readonly IFactoryBase<Area, AreaVM> factory;

        public AreaLogic(VacationContext _ctx, IFactoryBase<Area, AreaVM> _factory) 
        { 
            context = _ctx;
            factory = _factory;
        }

        public List<AreaVM> GetAreas()
        {            
            var areas = context.Areas.FromSqlRaw("EXEC dbo.fsAreas_s").ToList();

            var modelList = factory.GetModelListFromEntityList(areas);

            return modelList;
        }

        public AreaVM AddArea(AreaVM model)
        {
            int msg = 0;

            SqlParameter parameter = new SqlParameter()
            {
                ParameterName = "@message",
                SqlDbType = System.Data.SqlDbType.Int,
                Direction = System.Data.ParameterDirection.Output
            };
           
            var entityCreate = factory.GetEntityFromModel(model);

            context.Database.ExecuteSqlRaw("dbo.fsAreas_i @Description, @Active, @message OUTPUT",
                entityCreate.Description.ToSqlParameter("Description"),
                entityCreate.Active.ToSqlParameter("Active"),
                parameter);                

            msg = (int)parameter.Value;

            model.idArea = msg;

            return model;
        }

        public AreaVM UpdateArea(AreaVM model)
        {
            int msg = 0;

            SqlParameter parmRetVal = new SqlParameter()
            {
                ParameterName = "@message",
                SqlDbType = SqlDbType.Int,
                Direction = ParameterDirection.Output
            };

            var entityUpdate = factory.GetEntityFromModel(model);

            context.Database.ExecuteSqlRaw("fsAreas_u @IdArea, @Description, @message OUTPUT",
                       entityUpdate.IdArea.ToSqlParameter("IdArea"),
                       entityUpdate.Description.ToSqlParameter("Description"),
                       parmRetVal);        
            
            msg = (int)parmRetVal.Value;

            return model;
        }

        public int DeleteArea(int id)
        {
            int message = 0;

            SqlParameter parmRetVal = new SqlParameter()
            {
                ParameterName = "@message",
                SqlDbType = SqlDbType.Int,
                Direction = ParameterDirection.Output
            };

            try
            {
                context.Database.ExecuteSqlRaw("fsAreas_d @IdArea, @message OUTPUT",
                       id.ToSqlParameter("IdArea"),
                       parmRetVal);
            }
            catch (Exception)
            {
                return message = -1;
            }

            message = (int)parmRetVal.Value;

            return message;
        }

        public int EnableArea(int id)
        {
            int message = 0;

            SqlParameter parmRetVal = new SqlParameter()
            {
                ParameterName = "@message",
                SqlDbType = SqlDbType.Int,
                Direction = ParameterDirection.Output
            };

            try
            {
                context.Database.ExecuteSqlRaw("fsAreas_u2 @IdArea, @message OUTPUT",
                       id.ToSqlParameter("IdArea"),
                       parmRetVal);
            }
            catch (Exception)
            {
                return message = -1;
            }

            message = (int)parmRetVal.Value;

            return message;
        }

        public byte[] ExportAreas()
        {
            var areas = GetAreas();
            return ExcelExportHelper.ExportToExcel(areas, "Áreas");
        }
    }
}
