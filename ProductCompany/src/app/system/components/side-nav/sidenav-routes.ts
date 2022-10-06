import {RouteI} from "../../../core/interfaces/route-i";

export const SidenavRoutes:RouteI[] = [
  {
    iconUrl: '../../../../assets/images/icons/my-task.svg',
    route:'my-tasks',
    routeName: 'My Tasks'
  },
  {
    iconUrl: '../../../../assets/images/icons/activities.svg',
    route:'activities',
    routeName: 'Activities'
  },
  {
    iconUrl: '../../../../assets/images/icons/home.svg',
    route:'overview',
    routeName: 'Overview'
  },
  {
    iconUrl: '../../../../assets/images/icons/folder.svg',
    route:'projects',
    routeName: 'Projects'
  },
  {
    iconUrl: '../../../../assets/images/icons/message-2.svg',
    route:'messages',
    routeName: 'Messages'
  },

  {
    iconUrl: '../../../../assets/images/icons/profile-2user.svg',
    route:'team-members',
    routeName: 'Team Members'
  },
  {
    iconUrl: '../../../../assets/images/icons/calendar.svg',
    route:'calendar',
    routeName: 'Calendar'
  },
];
