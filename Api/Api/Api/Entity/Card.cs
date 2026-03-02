using Api.Enum;
using Microsoft.VisualBasic;
using System.Numerics;

namespace Api.Entity
{
    public class Card
    {
        public int Id { get; set; }

        public CardTypeEnum CardType { get; set; }

        public string Description { get; set; }
        public int StatusType { get; set; }

        public ICollection<Plan> Plans { get; set; }
    }
}
