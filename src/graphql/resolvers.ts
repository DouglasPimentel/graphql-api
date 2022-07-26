type AuthorArgs = {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
};

type BookArgs = {
  id: string | undefined;
  title: string | undefined;
  resume: string | undefined;
  link: string | undefined;
  authorId: string | undefined;
};

export const resolvers = {
  authors: async (_, context) => {
    const { db } = await context();

    const allAuthors = await db.author.findMany();

    return allAuthors;
  },
  author: async (args: AuthorArgs, context) => {
    const { db } = await context();

    const author = await db.author.findUnique({
      where: {
        id: args.id,
      },
      include: {
        books: true,
      },
    });

    return author;
  },
  createdAuthor: async (args: AuthorArgs, context) => {
    const { db } = await context();

    const newAuthor = await db.author.create({
      data: {
        name: args.name,
        email: args.email,
      },
    });

    return newAuthor;
  },
  books: async (_, context) => {
    const { db } = await context();

    const allBooks = await db.book.findMany();

    return allBooks;
  },
  createdBook: async (args: BookArgs, context) => {
    const { db } = await context();

    const newBook = await db.book.create({
      data: {
        title: args.title,
        resume: args.resume,
        link: args.link,
        authorId: args.authorId,
      },
    });

    return newBook;
  },
};
