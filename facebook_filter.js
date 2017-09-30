/* Fell free to steal this */
/* And send me a coffe */

(function() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {

                var nodes = document.querySelectorAll('.fbUserContent, .userContentWrapper, ._1bar, ._5my2, ._4qjp, ._2kg4, ._4-u2');
                for (var ii = 0, nn = nodes.length; ii < nn; ii++)
                {
                    var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';
                    if (text && text.indexOf('SCP') >= 0 && nodes[ii].style.display != 'none')
                    {
                        nodes[ii].style.display = 'none';
                    };
					if (text && text.indexOf('sporting') >= 0 && nodes[ii].style.display != 'none')
                    {
                        nodes[ii].style.display = 'none';
                    };
					if (text && text.indexOf('benfica') >= 0 && nodes[ii].style.display != 'none')
                    {
                        nodes[ii].style.display = 'none';
                    };
					if (text && text.indexOf('SLB') >= 0 && nodes[ii].style.display != 'none')
                    {
                        nodes[ii].style.display = 'none';
                    };
					if (text && text.indexOf('Futebol Clube do Porto') >= 0 && nodes[ii].style.display != 'none')
                    {
                        nodes[ii].style.display = 'none';
                    };
					if (text && text.indexOf('FCP') >= 0 && nodes[ii].style.display != 'none')
                    {
                        nodes[ii].style.display = 'none';
                    }
                }

            }
        });
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });

})();
