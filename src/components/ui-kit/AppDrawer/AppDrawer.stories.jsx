import AppDrawer from './index'

export default {
  title: 'compounds/AppDrawer',
  args: {
    openDrawer: true,
    handleDrawer: () => {}
  }
}

export const Default = (args) => {
  const { openDrawer, handleDrawer } = args
  return (
    <AppDrawer openDrawer={openDrawer} handleDrawer={handleDrawer}>
      <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Content goes here</h3>
    </AppDrawer>
  )
}
