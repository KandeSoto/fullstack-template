using OfficeOpenXml;
using System.ComponentModel;
using System.Reflection;
using vacation.Logic.Attributes;

namespace vacation.Logic.Helper
{
    public static class ExcelExportHelper
    {
        public static byte[] ExportToExcel<T>(IEnumerable<T> data, string sheetName = "Sheet1")
        {
            ExcelPackage.License.SetNonCommercialPersonal("Spark");

            using var package = new ExcelPackage();
            var worksheet = package.Workbook.Worksheets.Add(sheetName);

            var properties = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance)
            .Where(p => p.GetCustomAttribute<ExportIgnoreAttribute>() == null)
            .ToArray();

            // Header
            for (int i = 0; i < properties.Length; i++)
            {
                worksheet.Cells[1, i + 1].Value = GetDisplayName(properties[i]) ?? properties[i].Name;
            }

            // Data
            int row = 2;
            foreach (var item in data)
            {
                for (int i = 0; i < properties.Length; i++)
                {
                    var value = properties[i].GetValue(item);

                    // convertir bool en "Sí"/"No"
                    if (value is bool b)
                    {
                        worksheet.Cells[row, i + 1].Value = b ? "Sí" : "No";
                    }
                    else
                    {
                        worksheet.Cells[row, i + 1].Value = value;
                    }
                }
                row++;
            }

            return package.GetAsByteArray();
        }

        private static string? GetDisplayName(PropertyInfo prop)
        {
            var attr = prop.GetCustomAttribute<DisplayNameAttribute>();
            return attr?.DisplayName;
        }
    }
}
