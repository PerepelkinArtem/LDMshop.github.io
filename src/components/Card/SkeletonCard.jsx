import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCard = (props) => (
  <ContentLoader 
    speed={2}
    width={232}
    height={420}
    viewBox="0 0 232 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="5" rx="4" ry="4" width="32" height="32" /> 
    <rect x="5" y="43" rx="5" ry="5" width="190" height="180" /> 
    <rect x="11" y="1072" rx="5" ry="5" width="190" height="180" /> 
    <rect x="4" y="237" rx="5" ry="5" width="190" height="16" /> 
    <rect x="4" y="263" rx="5" ry="5" width="190" height="16" />
  </ContentLoader>
)

export default SkeletonCard