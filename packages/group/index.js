import Group from './src/main'

Group.install = function (Vue) {
  Vue.component(Group.name, Group)
}

export default Group
