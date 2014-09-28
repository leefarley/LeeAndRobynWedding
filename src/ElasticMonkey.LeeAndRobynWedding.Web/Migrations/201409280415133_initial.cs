namespace ElasticMonkey.LeeAndRobynWedding.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Invitations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Code = c.String(),
                        DietryRequirements = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.People",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        IsAttending = c.Int(nullable: false),
                        IsAdditionalGuest = c.Boolean(nullable: false),
                        Invitation_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Invitations", t => t.Invitation_Id)
                .Index(t => t.Invitation_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.People", "Invitation_Id", "dbo.Invitations");
            DropIndex("dbo.People", new[] { "Invitation_Id" });
            DropTable("dbo.People");
            DropTable("dbo.Invitations");
        }
    }
}
