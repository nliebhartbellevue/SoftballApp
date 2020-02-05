using System.Collections.Generic;
using System.Threading.Tasks;
using SoftballApp.API.Models;

namespace SoftballApp.API.Data
{
    public interface ISoftballRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}