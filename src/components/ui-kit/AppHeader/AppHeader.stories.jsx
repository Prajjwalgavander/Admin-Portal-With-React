import AppHeader from './index'

export default {
  title: 'compounds/AppHeader',
  args: {
    openDrawer: true,
    handleDrawer: () => {}
  }
}

export const Default = (args) => {
  const { openDrawer, handleDrawer } = args
  return (
    <AppHeader openDrawer={openDrawer} handleDrawerClose={handleDrawer} left={<p>Left Content</p>} right={<p>Left Content</p>} />
  )
}
