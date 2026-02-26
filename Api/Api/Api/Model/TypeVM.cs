namespace Api.Model
{
    public class TypeVM
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public List<string> Plans { get; set; }
    }
}
