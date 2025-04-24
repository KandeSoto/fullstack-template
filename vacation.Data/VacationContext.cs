using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vacation.Data.Models;

namespace vacation.Data
{
    public class VacationContext : DbContext
    {
        public VacationContext(DbContextOptions<VacationContext> options)
             :base(options){}   
        
        public DbSet<Area> Areas { get; set; }
    }
}
