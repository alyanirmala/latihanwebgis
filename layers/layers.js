var wms_layers = [];

var format_kECAMATAN_0 = new ol.format.GeoJSON();
var features_kECAMATAN_0 = format_kECAMATAN_0.readFeatures(json_kECAMATAN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kECAMATAN_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kECAMATAN_0.addFeatures(features_kECAMATAN_0);
var lyr_kECAMATAN_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kECAMATAN_0, 
                style: style_kECAMATAN_0,
                interactive: true,
    title: 'kECAMATAN<br />\
    <img src="styles/legend/kECAMATAN_0_0.png" /> kec. BUDONG - BUDONG<br />\
    <img src="styles/legend/kECAMATAN_0_1.png" /> kec. BONEHAU<br />\
    <img src="styles/legend/kECAMATAN_0_2.png" /> kec. KALUKKU<br />\
    <img src="styles/legend/kECAMATAN_0_3.png" /> kec. KALUMPANG<br />\
    <img src="styles/legend/kECAMATAN_0_4.png" /> kec. MAMUJU<br />\
    <img src="styles/legend/kECAMATAN_0_5.png" /> kec. PANGALE<br />\
    <img src="styles/legend/kECAMATAN_0_6.png" /> kec. SAMPAGA<br />\
    <img src="styles/legend/kECAMATAN_0_7.png" /> kec. SIMKEP<br />\
    <img src="styles/legend/kECAMATAN_0_8.png" /> kec. TAPALANG<br />\
    <img src="styles/legend/kECAMATAN_0_9.png" /> kec. TAPALANG BARAT<br />\
    <img src="styles/legend/kECAMATAN_0_10.png" /> kec. TOBADAK<br />\
    <img src="styles/legend/kECAMATAN_0_11.png" /> kec. TOMMO<br />\
    <img src="styles/legend/kECAMATAN_0_12.png" /> kec. TOPOYO<br />\
    <img src="styles/legend/kECAMATAN_0_13.png" /> kec. KAROSSA<br />'
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_LN_50K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_LN_50K_2 = format_ADMINISTRASIKECAMATAN_LN_50K_2.readFeatures(json_ADMINISTRASIKECAMATAN_LN_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_LN_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_LN_50K_2.addFeatures(features_ADMINISTRASIKECAMATAN_LN_50K_2);
var lyr_ADMINISTRASIKECAMATAN_LN_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_LN_50K_2, 
                style: style_ADMINISTRASIKECAMATAN_LN_50K_2,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_LN_50K_2.png" /> ADMINISTRASIKECAMATAN_LN_50K'
            });
var format_BANGUNAN_PT_50K_3 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_50K_3 = format_BANGUNAN_PT_50K_3.readFeatures(json_BANGUNAN_PT_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_50K_3.addFeatures(features_BANGUNAN_PT_50K_3);
var lyr_BANGUNAN_PT_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_PT_50K_3, 
                style: style_BANGUNAN_PT_50K_3,
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_50K_3.png" /> BANGUNAN_PT_50K'
            });
var format_CAGARBUDAYA_PT_50K_4 = new ol.format.GeoJSON();
var features_CAGARBUDAYA_PT_50K_4 = format_CAGARBUDAYA_PT_50K_4.readFeatures(json_CAGARBUDAYA_PT_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAGARBUDAYA_PT_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAGARBUDAYA_PT_50K_4.addFeatures(features_CAGARBUDAYA_PT_50K_4);
var lyr_CAGARBUDAYA_PT_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAGARBUDAYA_PT_50K_4, 
                style: style_CAGARBUDAYA_PT_50K_4,
                interactive: true,
                title: '<img src="styles/legend/CAGARBUDAYA_PT_50K_4.png" /> CAGARBUDAYA_PT_50K'
            });
var format_PENDIDIKAN_PT_50K_5 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_5 = format_PENDIDIKAN_PT_50K_5.readFeatures(json_PENDIDIKAN_PT_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_5.addFeatures(features_PENDIDIKAN_PT_50K_5);
var lyr_PENDIDIKAN_PT_50K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_PT_50K_5, 
                style: style_PENDIDIKAN_PT_50K_5,
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_5.png" /> PENDIDIKAN_PT_50K'
            });

lyr_kECAMATAN_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ADMINISTRASIKECAMATAN_LN_50K_2.setVisible(true);lyr_BANGUNAN_PT_50K_3.setVisible(true);lyr_CAGARBUDAYA_PT_50K_4.setVisible(true);lyr_PENDIDIKAN_PT_50K_5.setVisible(true);
var layersList = [lyr_kECAMATAN_0,lyr_GoogleSatellite_1,lyr_ADMINISTRASIKECAMATAN_LN_50K_2,lyr_BANGUNAN_PT_50K_3,lyr_CAGARBUDAYA_PT_50K_4,lyr_PENDIDIKAN_PT_50K_5];
lyr_kECAMATAN_0.set('fieldAliases', {});
lyr_ADMINISTRASIKECAMATAN_LN_50K_2.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BANGUNAN_PT_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_CAGARBUDAYA_PT_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_PT_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_kECAMATAN_0.set('fieldImages', {});
lyr_ADMINISTRASIKECAMATAN_LN_50K_2.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_BANGUNAN_PT_50K_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_CAGARBUDAYA_PT_50K_4.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PENDIDIKAN_PT_50K_5.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_kECAMATAN_0.set('fieldLabels', {});
lyr_ADMINISTRASIKECAMATAN_LN_50K_2.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BANGUNAN_PT_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_CAGARBUDAYA_PT_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PENDIDIKAN_PT_50K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_PENDIDIKAN_PT_50K_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});