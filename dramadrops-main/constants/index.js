export const sidebarLinks = [
  {
    id: "home",
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    id: "search",
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Search",
  },
  {
    id: "activity",
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Activity",
  },
  {
    id: "create-thread",
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Create Thread",
  },
  {
    id: "communities",
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communities",
  },
  {
    id: "profile",
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
