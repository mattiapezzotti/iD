export function svgTouch() {

    function drawTouch(selection) {
        selection.selectAll('.layer-touch')
            .data(['areas', 'lines', 'points', 'turns', 'markers'])
            .enter()
            .append('g')
            .attr('class', function(d) { return 'layer-touch ' + d; });

        drawTouch.enabled = function(_) {
            return this;
        };
    }

    return drawTouch;
}
