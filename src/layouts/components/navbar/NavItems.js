// ** Menu Components Imports
import NavLink from './NavLink'
import NavGroup from './NavGroup'
import { resolveHorizontalNavMenuItemComponent as resolveNavItemComponent } from '@layouts/utils'

const NavItems = props => {
  // ** Components Object
  const Components = {
    HorizontalNavMenuGroup: NavGroup,
    HorizontalNavMenuLink: NavLink
  }

  // ** Render Nav Items
  const RenderNavItems = props.items.map((item, index) => {
    const TagName = Components[resolveNavItemComponent(item)]

    return <TagName item={item} index={index} key={item.id} {...props} />
  })

  return RenderNavItems
}

export default NavItems
