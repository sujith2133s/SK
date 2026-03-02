using System.ComponentModel;

namespace Api.Enum
{
    public enum CardTypeEnum
    {
        [Description("Life Insurance")]
        LifeInsurance = 1,
        [Description("Health Insurance")]
        HealthInsurance = 2,
        [Description("Savings Investment")]
        SavingsInvestment = 3
    }
}
