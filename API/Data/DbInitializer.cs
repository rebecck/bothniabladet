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
                    Id = 1,
                    ImgName = "Image 1",
                    FilePath = "bothnia/images/image1.jpg",
                    Description = "Image 1 description",
                    CreatedDateTime = DateTime.Now,
                    Longitude = 123,
                    Latitude = 456,
                    IsExtern = true,
                    PublicationLimit = 10,
                    TimesPublicated = 5,
                    Width = 800,
                    Height = 600,
                    FileSizeKB = 1024,
                    Resolution = 72.0,
                    Camera = "Camera 1",
                },
                new Image
                {
                    Id = 2,
                    ImgName = "Image 2",
                    FilePath = "bothnia/images/image2.jpg",
                    Description = "Image 2 description",
                    CreatedDateTime = DateTime.Now,
                    Longitude = 789,
                    Latitude = 321,
                    IsExtern = false,
                    PublicationLimit = -1, // Since IsExtern is false, set PublicationLimit to null
                    TimesPublicated = 3,
                    Width = 1024,
                    Height = 768,
                    FileSizeKB = 2048,
                    Resolution = 96.0,
                    Camera = "Camera 2"
                },
                new Image
                {
                    Id = 3,
                    ImgName = "Image 3",
                    FilePath = "bothnia/images/image3.jpg",
                    Description = "Image 3 description",
                    CreatedDateTime = DateTime.Now,
                    Longitude = 111,
                    Latitude = 222,
                    IsExtern = true,
                    PublicationLimit = 5,
                    TimesPublicated = 2,
                    Width = 1200,
                    Height = 900,
                    FileSizeKB = 4096,
                    Resolution = 144.0,
                    Camera = "Camera 3"
                },
                new Image
                {
                    Id = 4,
                    ImgName = "Image 4",
                    FilePath = "bothnia/images/image4.jpg",
                    Description = "Image 4 description",
                    CreatedDateTime = DateTime.Now,
                    Longitude = 333,
                    Latitude = 444,
                    IsExtern = true,
                    PublicationLimit = 8,
                    TimesPublicated = 4,
                    Width = 1600,
                    Height = 1200,
                    FileSizeKB = 8192,
                    Resolution = 200.0,
                    Camera = "Camera 4"
                },
                new Image
                {
                    Id = 5,
                    ImgName = "Image 5",
                    FilePath = "bothnia/images/image5.jpg",
                    Description = "Image 5 description",
                    CreatedDateTime = DateTime.Now,
                    Longitude = 555,
                    Latitude = 666,
                    IsExtern = false,
                    PublicationLimit = -2, // Since IsExtern is false, set PublicationLimit to null
                    TimesPublicated = 1,
                    Width = 1920,
                    Height = 1080,
                    FileSizeKB = 16384,
                    Resolution = 300.0,
                    Camera = "Camera 5"
                }
            };

            //context.Products.AddRange(products) --> same as the foreach loop

            foreach (var image in images)
            {
                context.Images.Add(image);
            }

            context.SaveChanges();

            // Add seed data Categories 
            SeedCategories(context);

            // Add seed data keywords 
            SeedKeywords(context);
            
        }

        private static void SeedCategories(ImageBankContext context)
        {
            if (context.Categories.Any()) return;

            var categories = new List<Category>
            {
                new Category { Id = 1, Name = "News" },
                new Category { Id = 2, Name = "Sports" },
                new Category { Id = 3, Name = "Entertainment" },
                new Category { Id = 4, Name = "Business" },
                new Category { Id = 5, Name = "Technology" },
                new Category { Id = 6, Name = "Politics" },
                new Category { Id = 7, Name = "Travel" },
                new Category { Id = 8, Name = "Food" },
                new Category { Id = 9, Name = "Fashion" },
                new Category { Id = 10, Name = "Nature" }
            };

            context.Categories.AddRange(categories);
            context.SaveChanges();

            // Add one category to each image
            foreach (var image in context.Images)
            {
                if (image.Category != null) continue;

                // Assign a random category to each image
                var randomCategory = categories[new Random().Next(categories.Count)];
                image.Category = randomCategory;
            }

            context.SaveChanges();
        }

        private static void SeedKeywords(ImageBankContext context)
        {
            if (context.Keywords.Any()) return;

            var keywords = new List<Keyword>
            {
                new Keyword { Id = 1, Name = "Headline" },
                new Keyword { Id = 2, Name = "Breaking News" },
                new Keyword { Id = 3, Name = "Exclusive" },
                new Keyword { Id = 4, Name = "Sport" },
                new Keyword { Id = 5, Name = "Abroad" },
                new Keyword { Id = 6, Name = "Accident" },
                new Keyword { Id = 7, Name = "Traffic" },
                new Keyword { Id = 8, Name = "Animal" },
                new Keyword { Id = 9, Name = "Gothenburg" },
                new Keyword { Id = 10, Name = "Food" },
                new Keyword { Id = 11, Name = "Fashion" },
                new Keyword { Id = 12, Name = "Nature" },
                new Keyword { Id = 13, Name = "Opinion" },
                new Keyword { Id = 14, Name = "Investigation" },
                new Keyword { Id = 15, Name = "Interview" },
                new Keyword { Id = 16, Name = "Soccer" },
                new Keyword { Id = 17, Name = "Winter" },
                new Keyword { Id = 18, Name = "Innovation" },
                new Keyword { Id = 19, Name = "Summer" },
                new Keyword { Id = 20, Name = "Travel" }
            };

            context.Keywords.AddRange(keywords);
            context.SaveChanges();

            // Add 3 random keywords to each image
            var random = new Random();

            foreach (var image in context.Images)
            {
                if (image.Keywords != null) continue;

                var imageKeywords = new List<Keyword>();
                while (imageKeywords.Count < 3)
                {
                    // Assign a random keyword to the image
                    var randomKeyword = keywords[random.Next(keywords.Count)];
                    if (!imageKeywords.Contains(randomKeyword))
                    {
                        imageKeywords.Add(randomKeyword);
                    }
                }
                image.Keywords = imageKeywords;
            }

            context.SaveChanges();
        }

    }
} 