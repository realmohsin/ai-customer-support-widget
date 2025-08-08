import { createClerkClient } from "@clerk/backend";
import { action } from "../_generated/server";
import { v } from "convex/values";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

// action used instead of mutation because clerk is third party and convex can't make fetch call to clerk without using action
export const validate = action({
  args: {
    organizationId: v.string(),
  },
  handler: async (_, args) => {
    const organization = await clerkClient.organizations.getOrganization({
      organizationId: args.organizationId,
    });

    if (organization) {
      return { valid: true };
    } else {
      return { valid: false, reason: "Organization not valid" };
    }
  },
});
