using System.Linq;
using ElasticMonkey.LeeAndRobynWedding.Web.Models;

namespace ElasticMonkey.LeeAndRobynWedding.Web.Services
{
    public class DataService
    {
        private readonly DataContext _context;
        public DataService()
        {
            _context = new DataContext();
        }

        public Invitation GetInvitation(string code)
        {
            return _context.Invitations.SingleOrDefault(x => x.Code == code);
        }

        public void UpdateInvitation(Invitation invitation)
        {
            var original = _context.Invitations.Find(invitation.Id);

            if (original != null)
            {
                _context.Entry(original).CurrentValues.SetValues(invitation);
                _context.SaveChanges();
            }
        }
    }
}