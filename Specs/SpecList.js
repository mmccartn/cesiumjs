var specs = ['Specs/Core/AssociativeArraySpec','Specs/Core/AxisAlignedBoundingBoxSpec','Specs/Core/BingMapsApiSpec','Specs/Core/BoundingRectangleSpec','Specs/Core/BoundingSphereSpec','Specs/Core/BoxGeometrySpec','Specs/Core/BoxOutlineGeometrySpec','Specs/Core/Cartesian2Spec','Specs/Core/Cartesian3Spec','Specs/Core/Cartesian4Spec','Specs/Core/CartographicSpec','Specs/Core/CatmullRomSplineSpec','Specs/Core/CircleGeometrySpec','Specs/Core/CircleOutlineGeometrySpec','Specs/Core/ClockSpec','Specs/Core/ColorGeometryInstanceAttributeSpec','Specs/Core/ColorSpec','Specs/Core/CorridorGeometrySpec','Specs/Core/CorridorOutlineGeometrySpec','Specs/Core/CubicRealPolynomialSpec','Specs/Core/CylinderGeometrySpec','Specs/Core/CylinderOutlineGeometrySpec','Specs/Core/DeveloperErrorSpec','Specs/Core/EarthOrientationParametersSpec','Specs/Core/EllipseGeometrySpec','Specs/Core/EllipseOutlineGeometrySpec','Specs/Core/EllipsoidGeodesicSpec','Specs/Core/EllipsoidGeometrySpec','Specs/Core/EllipsoidOutlineGeometrySpec','Specs/Core/EllipsoidSpec','Specs/Core/EllipsoidTangentPlaneSpec','Specs/Core/EllipsoidalOccluderSpec','Specs/Core/EncodedCartesian3Spec','Specs/Core/EventSpec','Specs/Core/ExtentGeometrySpec','Specs/Core/ExtentOutlineGeometrySpec','Specs/Core/ExtentSpec','Specs/Core/FeatureDetectionSpec','Specs/Core/FullscreenSpec','Specs/Core/GeographicProjectionSpec','Specs/Core/GeometryAttributeSpec','Specs/Core/GeometryInstanceAttributeSpec','Specs/Core/GeometryInstanceSpec','Specs/Core/GeometryPipelineSpec','Specs/Core/GeometrySpec','Specs/Core/HermitePolynomialApproximationSpec','Specs/Core/HermiteSplineSpec','Specs/Core/Iau2000OrientationSpec','Specs/Core/Iau2006XysDataSpec','Specs/Core/IauOrientationAxesSpec','Specs/Core/IndexDatatypeSpec','Specs/Core/IntersectionTestsSpec','Specs/Core/Intersections2DSpec','Specs/Core/IntervalSpec','Specs/Core/JulianDateSpec','Specs/Core/LagrangePolynomialApproximationSpec','Specs/Core/LeapSecondSpec','Specs/Core/LinearApproximationSpec','Specs/Core/LinearSplineSpec','Specs/Core/MathSpec','Specs/Core/Matrix2Spec','Specs/Core/Matrix3Spec','Specs/Core/Matrix4Spec','Specs/Core/NearFarScalarSpec','Specs/Core/ObjectOrientedBoundingBoxSpec','Specs/Core/OccluderSpec','Specs/Core/PlaneSpec','Specs/Core/PolygonGeometrySpec','Specs/Core/PolygonOutlineGeometrySpec','Specs/Core/PolygonPipelineSpec','Specs/Core/PolylineGeometrySpec','Specs/Core/PolylinePipelineSpec','Specs/Core/PolylineVolumeGeometrySpec','Specs/Core/PolylineVolumeOutlineGeometrySpec','Specs/Core/QuadraticRealPolynomialSpec','Specs/Core/QuarticRealPolynomialSpec','Specs/Core/QuaternionSpec','Specs/Core/QuaternionSplineSpec','Specs/Core/QueueSpec','Specs/Core/RaySpec','Specs/Core/RequestErrorEventSpec','Specs/Core/RuntimeErrorSpec','Specs/Core/ScreenSpaceEventHandlerSpec','Specs/Core/ShapesSpec','Specs/Core/ShowGeometryInstanceAttributeSpec','Specs/Core/Simon1994PlanetaryPositionsSpec','Specs/Core/SimplePolylineGeometrySpec','Specs/Core/SphereGeometrySpec','Specs/Core/SphereOutlineGeometrySpec','Specs/Core/SphericalSpec','Specs/Core/SplineSpec','Specs/Core/TaskProcessorSpec','Specs/Core/TimeIntervalCollectionSpec','Specs/Core/TimeIntervalSpec','Specs/Core/TipsifySpec','Specs/Core/TransformsSpec','Specs/Core/TridiagonalSystemSolverSpec','Specs/Core/WallGeometrySpec','Specs/Core/WallOutlineGeometrySpec','Specs/Core/WebMercatorProjectionSpec','Specs/Core/barycentricCoordinatesSpec','Specs/Core/binarySearchSpec','Specs/Core/buildModuleUrlSpec','Specs/Core/cloneSpec','Specs/Core/combineSpec','Specs/Core/createGuidSpec','Specs/Core/definedSpec','Specs/Core/getFilenameFromUriSpec','Specs/Core/isCrossOriginUrlSpec','Specs/Core/isLeapYearSpec','Specs/Core/loadArrayBufferSpec','Specs/Core/loadBlobSpec','Specs/Core/loadImageSpec','Specs/Core/loadImageViaBlobSpec','Specs/Core/loadJsonSpec','Specs/Core/loadTextSpec','Specs/Core/loadXMLSpec','Specs/Core/parseResponseHeadersSpec','Specs/Core/pointInsideTriangleSpec','Specs/Core/requestAnimationFrameSpec','Specs/Core/writeTextToCanvasSpec','Specs/DynamicScene/ColorMaterialPropertySpec','Specs/DynamicScene/CompositeDynamicObjectCollectionSpec','Specs/DynamicScene/CompositeMaterialPropertySpec','Specs/DynamicScene/CompositePositionPropertySpec','Specs/DynamicScene/CompositePropertySpec','Specs/DynamicScene/ConstantPositionPropertySpec','Specs/DynamicScene/ConstantPropertySpec','Specs/DynamicScene/CzmlDataSourceSpec','Specs/DynamicScene/DataSourceCollectionSpec','Specs/DynamicScene/DataSourceDisplaySpec','Specs/DynamicScene/DynamicBillboardSpec','Specs/DynamicScene/DynamicBillboardVisualizerSpec','Specs/DynamicScene/DynamicClockSpec','Specs/DynamicScene/DynamicConeSpec','Specs/DynamicScene/DynamicConeVisualizerUsingCustomSensorSpec','Specs/DynamicScene/DynamicEllipseSpec','Specs/DynamicScene/DynamicEllipsoidSpec','Specs/DynamicScene/DynamicLabelSpec','Specs/DynamicScene/DynamicLabelVisualizerSpec','Specs/DynamicScene/DynamicModelSpec','Specs/DynamicScene/DynamicModelVisualizerSpec','Specs/DynamicScene/DynamicObjectCollectionSpec','Specs/DynamicScene/DynamicObjectSpec','Specs/DynamicScene/DynamicObjectViewSpec','Specs/DynamicScene/DynamicPathSpec','Specs/DynamicScene/DynamicPathVisualizerSpec','Specs/DynamicScene/DynamicPointSpec','Specs/DynamicScene/DynamicPointVisualizerSpec','Specs/DynamicScene/DynamicPolygonSpec','Specs/DynamicScene/DynamicPolylineSpec','Specs/DynamicScene/DynamicPyramidSpec','Specs/DynamicScene/DynamicPyramidVisualizerSpec','Specs/DynamicScene/DynamicVectorSpec','Specs/DynamicScene/DynamicVectorVisualizerSpec','Specs/DynamicScene/EllipseGeometryUpdaterSpec','Specs/DynamicScene/EllipsoidGeometryUpdaterSpec','Specs/DynamicScene/GeoJsonDataSourceSpec','Specs/DynamicScene/GeometryVisualizerSpec','Specs/DynamicScene/GridMaterialPropertySpec','Specs/DynamicScene/ImageMaterialPropertySpec','Specs/DynamicScene/PolygonGeometryUpdaterSpec','Specs/DynamicScene/PolylineGeometryUpdaterSpec','Specs/DynamicScene/PolylineOutlineMaterialPropertySpec','Specs/DynamicScene/PositionPropertyArraySpec','Specs/DynamicScene/PropertyArraySpec','Specs/DynamicScene/ReferencePropertySpec','Specs/DynamicScene/SampledPositionPropertySpec','Specs/DynamicScene/SampledPropertySpec','Specs/DynamicScene/TimeIntervalCollectionPositionPropertySpec','Specs/DynamicScene/TimeIntervalCollectionPropertySpec','Specs/Renderer/AutomaticUniformSpec','Specs/Renderer/BufferSpec','Specs/Renderer/BuiltinFunctionsSpec','Specs/Renderer/ClearCommandSpec','Specs/Renderer/ClearSpec','Specs/Renderer/ContextSpec','Specs/Renderer/CubeMapSpec','Specs/Renderer/DrawCommandSpec','Specs/Renderer/DrawSpec','Specs/Renderer/FramebufferSpec','Specs/Renderer/PassStateSpec','Specs/Renderer/RenderStateSpec','Specs/Renderer/RenderbufferSpec','Specs/Renderer/SamplerSpec','Specs/Renderer/ShaderCacheSpec','Specs/Renderer/ShaderProgramSpec','Specs/Renderer/TextureAtlasBuilderSpec','Specs/Renderer/TextureAtlasSpec','Specs/Renderer/TextureSpec','Specs/Renderer/UniformDatatypeSpec','Specs/Renderer/VertexArrayFacadeSpec','Specs/Renderer/VertexArrayFactorySpec','Specs/Renderer/VertexArraySpec','Specs/Renderer/createShaderSourceSpec','Specs/Renderer/loadCubeMapSpec','Specs/Scene/AppearanceSpec','Specs/Scene/ArcGisImageServerTerrainProviderSpec','Specs/Scene/ArcGisMapServerImageryProviderSpec','Specs/Scene/BillboardCollectionSpec','Specs/Scene/BingMapsImageryProviderSpec','Specs/Scene/CameraControllerSpec','Specs/Scene/CameraEventAggregatorSpec','Specs/Scene/CameraFlightPathSpec','Specs/Scene/CameraSpec','Specs/Scene/CentralBodySpec','Specs/Scene/CentralBodySurfaceSpec','Specs/Scene/CesiumTerrainProviderSpec','Specs/Scene/CompositePrimitiveSpec','Specs/Scene/CreditDisplaySpec','Specs/Scene/CullingVolumeSpec','Specs/Scene/DebugAppearanceSpec','Specs/Scene/DebugModelMatrixPrimitiveSpec','Specs/Scene/DiscardMissingTileImagePolicySpec','Specs/Scene/EllipsoidPrimitiveSpec','Specs/Scene/EllipsoidSurfaceAppearanceSpec','Specs/Scene/EllipsoidTerrainProviderSpec','Specs/Scene/ExtentPrimitiveSpec','Specs/Scene/FrustumCommandsSpec','Specs/Scene/GeographicTilingSchemeSpec','Specs/Scene/GeometryRenderingSpec','Specs/Scene/GoogleEarthImageryProviderSpec','Specs/Scene/GridImageryProviderSpec','Specs/Scene/HeightmapTerrainDataSpec','Specs/Scene/HeightmapTessellatorSpec','Specs/Scene/ImageryLayerCollectionSpec','Specs/Scene/ImageryLayerSpec','Specs/Scene/LabelCollectionSpec','Specs/Scene/MaterialAppearanceSpec','Specs/Scene/MaterialSpec','Specs/Scene/ModelSpec','Specs/Scene/MoonSpec','Specs/Scene/MultifrustumSpec','Specs/Scene/OpenStreetMapImageryProviderSpec','Specs/Scene/OrthographicFrustumSpec','Specs/Scene/PerInstanceColorAppearanceSpec','Specs/Scene/PerspectiveFrustumSpec','Specs/Scene/PerspectiveOffCenterFrustumSpec','Specs/Scene/PickSpec','Specs/Scene/PolygonSpec','Specs/Scene/PolylineCollectionSpec','Specs/Scene/PolylineColorAppearanceSpec','Specs/Scene/PolylineMaterialAppearanceSpec','Specs/Scene/PrimitiveCullingSpec','Specs/Scene/PrimitiveSpec','Specs/Scene/QuantizedMeshTerrainDataSpec','Specs/Scene/SceneSpec','Specs/Scene/SceneTransformsSpec','Specs/Scene/ScreenSpaceCameraControllerSpec','Specs/Scene/SingleTileImageryProviderSpec','Specs/Scene/SkyAtmosphereSpec','Specs/Scene/SkyBoxSpec','Specs/Scene/SunSpec','Specs/Scene/TexturePoolSpec','Specs/Scene/TileCoordinatesImageryProviderSpec','Specs/Scene/TileMapServiceImageryProviderSpec','Specs/Scene/TileReplacementQueueSpec','Specs/Scene/TileSpec','Specs/Scene/TilingSchemeSpec','Specs/Scene/VRTheWorldTerrainProviderSpec','Specs/Scene/ViewportQuadSpec','Specs/Scene/WebMapServiceImageryProviderSpec','Specs/Scene/WebMercatorTilingSchemeSpec','Specs/Scene/createTangentSpaceDebugPrimitiveSpec','Specs/Scene/sampleTerrainSpec','Specs/TestWorkers/returnByteLength','Specs/TestWorkers/returnNonCloneable','Specs/TestWorkers/returnParameters','Specs/TestWorkers/throwError','Specs/TestWorkers/transferArrayBuffer','Specs/ThirdParty/whenSpec','Specs/Widgets/Animation/AnimationSpec','Specs/Widgets/Animation/AnimationViewModelSpec','Specs/Widgets/BaseLayerPicker/BaseLayerPickerSpec','Specs/Widgets/BaseLayerPicker/BaseLayerPickerViewModelSpec','Specs/Widgets/BaseLayerPicker/ImageryProviderViewModelSpec','Specs/Widgets/CesiumInspector/CesiumInspectorSpec','Specs/Widgets/CesiumInspector/CesiumInspectorViewModelSpec','Specs/Widgets/CesiumWidget/CesiumWidgetSpec','Specs/Widgets/ClockViewModelSpec','Specs/Widgets/FullscreenButton/FullscreenButtonSpec','Specs/Widgets/FullscreenButton/FullscreenButtonViewModelSpec','Specs/Widgets/Geocoder/GeocoderSpec','Specs/Widgets/Geocoder/GeocoderViewModelSpec','Specs/Widgets/HomeButton/HomeButtonSpec','Specs/Widgets/HomeButton/HomeButtonViewModelSpec','Specs/Widgets/InfoBox/InfoBoxSpec','Specs/Widgets/InfoBox/InfoBoxViewModelSpec','Specs/Widgets/SceneModePicker/SceneModePickerSpec','Specs/Widgets/SceneModePicker/SceneModePickerViewModelSpec','Specs/Widgets/SelectionIndicator/SelectionIndicatorSpec','Specs/Widgets/SelectionIndicator/SelectionIndicatorViewModelSpec','Specs/Widgets/SvgPathBindingHandlerSpec','Specs/Widgets/Timeline/TimelineSpec','Specs/Widgets/Viewer/ViewerSpec','Specs/Widgets/Viewer/viewerDragDropMixinSpec','Specs/Widgets/Viewer/viewerDynamicObjectMixinSpec','Specs/Widgets/createCommandSpec'];