using Api.Context;
using Api.IRepository;
using Api.Model;
using Microsoft.EntityFrameworkCore;
using System;

namespace Api.Repository
{
    public class CardTypeRepository : ICardTypeRepository
    {
        private readonly DatabaseContext dbcontext;
        public CardTypeRepository(DatabaseContext dbcontext)
        {
            this.dbcontext = dbcontext;
        }


        public async Task<List<TypeVM>> getCardType()
        {
            var data = await dbcontext.Cards.Where(c => c.StatusType == 1)
                      .Select(c => new TypeVM
        {
                                Id = c.Id,
                                Type = c.CardType.ToString(),
                                Description = c.Description,
                                Plans = c.Plans
                                    .Where(p => p.StatusType == 1)
                                    .Select(p => p.PlanType.ToString())
                                    .ToList()
        }).ToListAsync();
            return data;
        }
    }
}
