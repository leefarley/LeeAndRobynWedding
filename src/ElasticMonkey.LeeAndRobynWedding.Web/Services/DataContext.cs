using System.Data.Entity;
using ElasticMonkey.LeeAndRobynWedding.Web.Models;

namespace ElasticMonkey.LeeAndRobynWedding.Web.Services
{
    public class DataContext : DbContext
    {
        public DbSet<Invitation> Invitations { get; set; }
        public DbSet<Person> People { get; set; }
    }
}