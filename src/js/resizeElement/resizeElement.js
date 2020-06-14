import $ from 'jquery';
import * as vars from '../../data/vars.json';
import * as stateHelper from '../stateHelper/stateHelper.js';

/**
 * replaces viewport height with javascript. call this on load and on resize
 * @param {*} elements pass a nodelist of elements, or a jquery selection.
 * @param {*} fraction element height as a viewport height fraction
 */
const resizeToViewportHeightFraction = ( elements, cssProperty, fraction = 1 ) => {
    $( elements ).each(function (index, element) {
        $(element).css(cssProperty, Math.min( window.outerHeight, window.innerHeight ) * fraction);
    })
}

const resizeElementsToHeightOf = ( elements, cssProperty, referenceElement, withMargin ) => {
    $( elements ).each( function ( index, element ) {
        $( element ).css( cssProperty, $( referenceElement ).outerHeight( withMargin ) );
    })
}

export function resizeElements( pageLoad ) {
    resizeElementsToHeightOf( $( ".m-heading-top" ), "margin-top", $( ".m-header" ), true );
    resizeElementsToHeightOf( $( ".m-text-container-absolute" ), "top", $( ".m-header" ), true );
    resizeElementsToHeightOf( $( ".m-text-container-absolute" ), "margin-top", $( ".m-heading-top" ), false );
    resizeElementsToHeightOf( $( ".m-text-container-absolute" ), "bottom", $( ".m-footer-transparent" ), true );

    // If address bar is visible
    if ( stateHelper.addressBarVisible() || pageLoad ) {
        //alert('now');
        resizeToViewportHeightFraction( $( ".m-media-canvas" ), "height", vars.mediaCanvasHeightFractionMobile );
        resizeToViewportHeightFraction( $( ".m-media-canvas" ), "top", vars.mediaCanvasStickyFractionMobile - vars.mediaCanvasHeightFractionMobile );
        resizeToViewportHeightFraction( $( ".m-heading-middle" ), "top", vars.mediaCanvasStickyFractionMobile );
    }
}