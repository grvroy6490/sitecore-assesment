# Hands-on tasks (about 20 minutes)

Rules: no AI tools of any kind. Searching docs (react.dev, nextjs.org, graphql.org, MDN) is fine.
Talk through your thinking as you go. We care about how you work, not only the result.

```
npm install
npm run dev        # http://localhost:3000
npm test           # Task 3 tests
npm run gql        # Task 4
```

## Task 1: Doctor list (`src/components/DoctorList.tsx`)

Render the doctors from `src/data/doctors.ts`:

- Show each doctor's name and specialty.
- If a doctor has no specialty, show nothing for it (not the word "undefined").
- Add a "Show only cardiology" toggle (checkbox or button) that filters the list.

Open http://localhost:3000/doctors

## Task 2: Fix the products page (`src/app/products/page.tsx`)

This page is broken. Run it, read the error, fix it, and explain why it failed
and why you fixed it the way you did.

Open http://localhost:3000/products (start `npm run dev` first; the page calls the local API).

## Task 3: Menu tree (`src/lib/buildTree.ts`, `src/components/MenuTree.tsx`)

1. Implement `buildTree` so a flat list with `parentId` becomes a nested tree.
   `npm test` should pass.
2. Render the tree in `MenuTree` as nested `<ul>`/`<li>`.

Open http://localhost:3000/menu

## Task 4: Write a GraphQL query (`queries/doctors.graphql`)

Read `src/data/schema.graphql`, then write queries in `queries/doctors.graphql`.
Run with `npm run gql`.

a. Return the first 3 doctors whose specialty is `Cardiology`. For each, return the
   `id`, the name value, the specialty value, and the photo `src` and `alt`.
   Also return `total` and the paging info (`endCursor`, `hasNext`).

b. Turn it into a reusable query using variables for the specialty and the page size,
   and give the operation a name.

c. Get the next page. How do you use the cursor from the first response?
   (`npm run gql -- '{"specialty":"Cardiology","first":3,"after":"<cursor>"}'`)

d. Some doctors have no photo. What does the response show for them, and how would
   your frontend code need to handle that?
