import { defineAbilityFor, type Role, userSchema } from '@saas/auth'

export function getUserPermissions(userId: string, role: Role) {
  const authUser = userSchema.parse({
    id: userId,
    role,
  })

  const asbility = defineAbilityFor(authUser)

  return asbility
}
