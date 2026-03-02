using Api.IRepository;
using Api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardTypeController : ControllerBase
    {
        private readonly ICardTypeRepository cardTypeRepository;
        public CardTypeController(ICardTypeRepository cardTypeRepository) {
            this.cardTypeRepository = cardTypeRepository;
        }

        [HttpGet("getCards")]
        public async Task<List<TypeVM>> getCardType()
        {
            return await cardTypeRepository.getCardType();
        }
    }
}
