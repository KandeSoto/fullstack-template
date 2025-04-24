using System.ComponentModel;
using vacation.Logic.Attributes;

namespace vacation.Logic.ViewModels
{
    public class AreaVM
    {
        [ExportIgnore]
        public int idArea { get; set; }

        [DisplayName("Descripción")]
        public string description { get; set; } = string.Empty;

        [DisplayName("Activo")]
        public bool active { get; set; }
    }
}
