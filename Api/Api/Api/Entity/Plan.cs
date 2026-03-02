using Api.Enum;

namespace Api.Entity
{
    public class Plan
    {
        public int Id { get; set; }

        public PlanTypeEnum PlanType { get; set; }

        public int StatusType { get; set; }

        public int CardId { get; set; }

        public Card Card { get; set; }
    }
}
