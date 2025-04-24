using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vacation.Data.Models
{
    public class Area
    {
        [Key]
        public int IdArea { get; set; }
        public string Description { get; set; } = string.Empty;
        public bool Active { get; set; }
    }
}
