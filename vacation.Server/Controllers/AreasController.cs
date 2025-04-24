using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using vacation.Data.Models;
using vacation.Logic.Repositories.Contracts.Admin;
using vacation.Logic.Repositories.Services.Admin;
using vacation.Logic.ViewModels;

namespace vacation.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AreasController : ControllerBase
    {
        private readonly IArea areaLogic;

        public AreasController(IArea _areaLogic)
        {
            areaLogic = _areaLogic;
        }

        [HttpGet("GetAreas")]
        public IActionResult GetAreas()
        {

            try
            {
                var areaList = areaLogic.GetAreas();

                return Ok(new APIResponseMessage<List<AreaVM>>() { Message = "Areas data.", Data = areaList });                
            }
            catch (Exception ex)
            {
                return StatusCode(500, new APIResponseMessage<string>() { Error = $"GetAreas error.. {ex.Message}" });
            }            
        }

        [HttpPost("AddArea")]
        public IActionResult AddArea(AreaVM areaData)
        {
            try
            {               
                if (!ModelState.IsValid)                
                    return BadRequest(new APIResponseMessage<IEnumerable<ModelStateEntry>>() { Error = "Model invalid", Data = ModelState.Values.Where(el => el.ValidationState == ModelValidationState.Invalid) });

                var area = areaLogic.AddArea(areaData);
                return Ok(new APIResponseMessage<AreaVM>() { Message = "Area data.", Data = area });
         
            }
            catch (Exception ex)
            {                
                return StatusCode(500, new APIResponseMessage<string>() { Error = $"AddArea error.. {ex.Message}" });
            }
        }

        [HttpPut("UpdateArea")]
        public IActionResult UpdateArea(AreaVM areaData)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(new APIResponseMessage<IEnumerable<ModelStateEntry>>() { Error = "Model invalid", Data = ModelState.Values.Where(el => el.ValidationState == ModelValidationState.Invalid) });

                var area = areaLogic.UpdateArea(areaData);
                return Ok(new APIResponseMessage<AreaVM>() { Message = "Area data.", Data = area });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new APIResponseMessage<string>() { Error = $"UpdateArea error.. {ex.Message}" });
            }
        }

        [HttpDelete("DeleteArea")]
        public IActionResult DeleteArea(int idArea)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(new APIResponseMessage<IEnumerable<ModelStateEntry>>() { Error = "Model invalid", Data = ModelState.Values.Where(el => el.ValidationState == ModelValidationState.Invalid) });

                var result = areaLogic.DeleteArea(idArea);
                return Ok(new APIResponseMessage<int>() { Message = "Area data.", Data = result });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new APIResponseMessage<string>() { Error = $"AddArea error.. {ex.Message}" });
            }
        }

        [HttpPost("EnableDisableArea")]
        public IActionResult EnableDisableArea(AreaVM areaData)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(new APIResponseMessage<IEnumerable<ModelStateEntry>>() { Error = "Model invalid", Data = ModelState.Values.Where(el => el.ValidationState == ModelValidationState.Invalid) });

                var result = areaLogic.EnableArea(areaData.idArea);
                return Ok(new APIResponseMessage<int>() { Message = "Area data.", Data = result });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new APIResponseMessage<string>() { Error = $"AddArea error.. {ex.Message}" });
            }
        }

        [HttpGet("ExportAreas")]        
        public IActionResult ExportAreas()
        {            
            var excelBytes = areaLogic.ExportAreas();

            return File(
                excelBytes,
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "Areas.xlsx"
            );
        }
    }
}
