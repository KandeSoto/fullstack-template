using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vacation.Logic.Attributes
{
    [AttributeUsage(AttributeTargets.Property)]
    public class ExportIgnoreAttribute : Attribute
    {
    }
}
