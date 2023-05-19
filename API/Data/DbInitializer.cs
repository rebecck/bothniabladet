using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ImageBankContext context) 
        {
            // If we have images in database; dont fill with seed data
            if (context.Images.Any()) return;

            var images = new List<Image>
            {
                new Image
                    {
                        Description = "Image 1",
                        IsExtern = false,
                        Width = 800,
                        Height = 600,
                        PublicationLimit = 10,
                        TimesPublicated = 5,
                        Price = 9.99,
                        FilePath = "images/images/image1.jpg",
                        Type = "JPEG"
                    },
                    new Image
                    {
                        Description = "Image 2",
                        IsExtern = true,
                        Width = 1024,
                        Height = 768,
                        PublicationLimit = 5,
                        TimesPublicated = 2,
                        Price = 14.99,
                        FilePath = "images/images/image2.jpg",
                        Type = "JPEG"
                    },
                    // Add more seed data as needed
                    new Image
                    {
                        Description = "Image 3",
                        IsExtern = false,
                        Width = 1200,
                        Height = 800,
                        PublicationLimit = 20,
                        TimesPublicated = 12,
                        Price = 19.99,
                        FilePath = "images/images/image3.jpg",
                        Type = "PNG"
                    },
                    new Image
                    {
                        Description = "Image 4",
                        IsExtern = true,
                        Width = 640,
                        Height = 480,
                        PublicationLimit = 8,
                        TimesPublicated = 4,
                        Price = 12.99,
                        FilePath = "images/images/image4.jpg",
                        Type = "JPEG"
                    },
                    new Image
                    {
                        Description = "Image 5",
                        IsExtern = false,
                        Width = 1920,
                        Height = 1080,
                        PublicationLimit = 15,
                        TimesPublicated = 8,
                        Price = 24.99,
                        FilePath = "images/images/image5.jpg",
                        Type = "JPEG"
                    }
            };

            //context.Products.AddRange(products) --> same as the foreach loop

            foreach (var image in images)
            {
                context.Images.Add(image);
            }

            context.SaveChanges();
        }
    }
}