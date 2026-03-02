using System.ComponentModel;

namespace Api.Enum
{
public enum PlanTypeEnum : byte
{
        [Description("Term Plan")]
        TermPlan = 1,
        [Description("Endowment")]
        Endowment = 2,
        [Description("ULIP")]
        ULIP = 3,
        [Description("Family Floater")]
        FamilyFloater = 4,
        [Description("Critical Illness")]
        CriticalIllness = 5,
        [Description("Guaranteed Returns")]
        GuaranteedReturns = 6,
        [Description("Tax Benefits")]
        TaxBenefits = 7,
        [Description("Life Cover")]
        LifeCover = 8
    }
}
