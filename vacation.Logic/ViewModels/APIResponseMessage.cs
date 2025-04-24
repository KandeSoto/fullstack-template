using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vacation.Logic.ViewModels
{
    public class APIResponseMessage<T>
    {
        public string Message { get; set; } = string.Empty;
        public string Error { get; set; } = string.Empty;
        public T Data { get; set; }
    }
}
