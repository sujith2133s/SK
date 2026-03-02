using Api.Model;

namespace Api.IRepository
{
    public interface ICardTypeRepository
    {
        Task<List<TypeVM>> getCardType();
    }
}
