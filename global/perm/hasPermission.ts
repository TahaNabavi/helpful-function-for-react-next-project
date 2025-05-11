export type Role = keyof typeof ROLES;
const ROLES = {
  user: ["update:ownComment"],
  admin: ["update:comment"],
  owner: ["update:comment", "delete:comment"],
} as const;

export type Permission = (typeof ROLES)[Role][number];

export type User = {
  id: number;
  role: Role;
};

export default function hasPermission(
  user: User,
  permission: Permission
): boolean {
  return (ROLES[user.role] as readonly Permission[]).includes(permission);
}
