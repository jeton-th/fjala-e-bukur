import { faker } from "@faker-js/faker";
import { PostType } from "./types";

export function createRandomUser(): Pick<PostType, "title" | "content"> {
  return {
    title: faker.lorem.sentence(),
    content: [{ type: "text", text: faker.lorem.paragraph() }],
  };
}

export const posts: PostType[] = faker.helpers
  .multiple(createRandomUser, {
    count: 100,
  })
  .map((post, id) => ({ id: id.toString(), ...post }));
