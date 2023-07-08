export default function useAssets(asset) {
    const assets = import.meta.glob('/assets/**', {eager: true});
    console.log('im here')
    console.log(asset)
    const getAssetUrl = () => {
     if (assets[asset]) {
       return assets[asset].default
     }
    }
  
    return getAssetUrl()
  }