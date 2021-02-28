import expressLoader from './express'

export default async ({ expressApp }) => {
  await expressLoader({ app: expressApp })
}
