/*globals jQuery, window, Sys */
'use strict';

(function ($, Sys) {
    //function dnnEditBasicSettings() {
    //    $('#dnnEditBasicSettings').dnnPanels();
    //    $('#dnnEditBasicSettings .dnnFormExpandContent a').dnnExpandAll({ expandText: '<%=Localization.GetString("ExpandAll", LocalResourceFile)%>', collapseText: '<%=Localization.GetString("CollapseAll", LocalResourceFile)%>', targetArea: '#dnnEditBasicSettings' });
    //}

    //dnnEditBasicSettings();
    //Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function () {
    //    dnnEditBasicSettings();
    //});

    $(document).ready(function () {

        //CUSTOM MODULE FOR CHECKING EXISTING AN ELEMENS
        jQuery.fn.exists = function () {
            return this.length > 0;
        };

        var $lnkAdd = '<i class="fa fa-plus-circle"></i>',
            $lnkEdit = '<i class="fa fa-pencil"></i>',
            $lnkDelete = '<i class="fa fa-trash-o"></i>',
            $lnkBack = '<i class="fa fa-angle-left"></i>',
            $lnkUp = '<i class="fa fa-angle-up"></i>',
            $lnkDown = '<i class="fa fa-angle-down"></i>',
            $lnkHome = '<i class="fa fa-home"></i>',
            $lnkAll = '<i class="fa fa-external-link"></i>',
            $lnkUpload = '<i class="fa fa-upload"></i>',
            $lnkSave = '<i class="fa fa-floppy-o"></i>',
            $lnkCancel = '<i class="fa fa-ban"></i>',
            $lnkInfo = '<i class="fa fa-info-circle"></i>',
            $lnkClose = '<i class="fa fa-close"></i>',
            $lnkWarning = '<i class="fa fa-warning"></i>',
            $lnkLock = '<i class="fa fa-lock"></i>',
            $lnkUnlock = '<i class="fa fa-unlock"></i>',
            $lnkSettings = '<i class="fa fa-cog"></i>',
            $lnkCheck = '<i class="fa fa-check"></i>',
            $lnkImage = '<i class="fa fa-picture-o"></i>',
            $lnkCopy = '<i class="fa fa-clipboard"></i>',
            $lnkKey = '<i class="fa fa-key"></i>',
            $lnkCompany = '<i class="fa fa-building-o"></i>',
            $lnkMail = '<i class="fa fa-envelope-o"></i>',
            $lnkPhone = '<i class="fa fa-phone"></i>',
            $lnkGlobe = '<i class="fa fa-globe"></i>',
            $lnkPrev = '<i class="fa fa-angle-left"></i>',
            $lnkNext = '<i class="fa fa-angle-right"></i>',
            $lnkQuoteLeft = '<i class="fa fa-quote-left"></i>',
            $lnkQuoteRight = '<i class="fa fa-quote-right"></i>',
            $lnkStar = '<i class="fa fa-star"></i>',
            $largeIcon = 'fa-lg',
            $2xIcon = 'fa-2x',
            $3xIcon = 'fa-3x',
            $4xIcon = 'fa-4x';

        //PUSHED MIXED UP ICON AND TEXT ONTO ELEMENTS
        $('.JSLicense .link-add').prepend($lnkAdd + ' ');
        $('.JSLicense .link-edit').prepend($lnkEdit + ' ');
        $('.JSLicense .link-delete').prepend($lnkDelete + ' ');
        $('.JSLicense .link-back').prepend($lnkBack + ' ');
        $('.JSLicense .link-up').prepend($lnkUp + ' ');
        $('.JSLicense .link-down').prepend($lnkDown + ' ');
        $('.JSLicense .link-home').prepend($lnkHome + ' ');
        $('.JSLicense .link-all').prepend($lnkAll + ' ');
        $('.JSLicense .link-upload').prepend($lnkUpload + ' ');
        $('.JSLicense .link-save').prepend($lnkSave + ' ');
        $('.JSLicense .link-cancel').prepend($lnkCancel + ' ');
        $('.JSLicense .link-info').prepend($lnkInfo + ' ');
        $('.JSLicense .link-prev').prepend($lnkPrev + ' ');
        $('.JSLicense .link-close').prepend($lnkClose + ' ');
        $('.JSLicense .link-warning').prepend($lnkWarning + ' ');
        $('.JSLicense .link-lock').prepend($lnkLock + ' ');
        $('.JSLicense .link-unlock').prepend($lnkUnlock + ' ');
        $('.JSLicense .link-settings').prepend($lnkSettings + ' ');
        $('.JSLicense .link-check').prepend($lnkCheck + ' ');
        $('.JSLicense .link-image').prepend($lnkImage + ' ');
        $('.JSLicense .link-copy').prepend($lnkCopy + ' ');
        $('.JSLicense .link-key').prepend($lnkKey + ' ');
        $('.JSLicense .link-company').prepend($lnkCompany + ' ');
        $('.JSLicense .link-mail').prepend($lnkMail + ' ');
        $('.JSLicense .link-phone').prepend($lnkPhone + ' ');
        $('.JSLicense .link-globe').prepend($lnkGlobe + ' ');
        $('.JSLicense .link-next').append(' ' + $lnkNext);
        $('.JSLicense .link-quote-left').prepend($lnkQuoteLeft + ' ').find('.fa').addClass($largeIcon);
        $('.JSLicense .link-quote-right').append(' ' + $lnkQuoteRight).find('.fa').addClass($largeIcon);
        $('.JSLicense .link-5-star').prepend(function () {
            var $stars = '';
            for (var i = 0; i < 5; i++) $stars += $lnkStar;
            return $stars + ' ';
        });
        $('.JSLicense .link-4-star').prepend(function () {
            var $stars = '';
            for (var i = 0; i < 4; i++) $stars += $lnkStar;
            return $stars + ' ';
        });
        $('.JSLicense .link-3-star').prepend(function () {
            var $stars = '';
            for (var i = 0; i < 3; i++) $stars += $lnkStar;
            return $stars + ' ';
        });
        $('.JSLicense .link-2-star').prepend(function () {
            var $stars = '';
            for (var i = 0; i < 2; i++) $stars += $lnkStar;
            return $stars + ' ';
        });
        $('.JSLicense .link-1-star').prepend(function () {
            var $stars = '';
            for (var i = 0; i < 1; i++) $stars += $lnkStar;
            return $stars + ' ';
        });

        //PUSHED ONLY ICONS ON ELEMTNS
        $('.JSLicense .link-add.no-txt').html($lnkAdd);
        $('.JSLicense .link-edit.no-txt').html($lnkEdit);
        $('.JSLicense .link-delete.no-txt').html($lnkDelete);
        $('.JSLicense .link-back.no-txt').html($lnkBack);
        $('.JSLicense .link-up.no-txt').html($lnkUp);
        $('.JSLicense .link-down.no-txt').html($lnkDown);
        $('.JSLicense .link-home.no-txt').html($lnkHome);
        $('.JSLicense .link-all.no-txt').html($lnkAll);
        $('.JSLicense .link-upload.no-txt').html($lnkUpload);
        $('.JSLicense .link-save.no-txt').html($lnkSave);
        $('.JSLicense .link-cancel.no-txt').html($lnkCancel);
        $('.JSLicense .link-info.no-txt').html($lnkInfo);
        $('.JSLicense .link-prev.no-txt').html($lnkPrev);
        $('.JSLicense .link-next.no-txt').html($lnkNext);
        $('.JSLicense .link-close.no-txt').html($lnkClose);
        $('.JSLicense .link-warning.no-txt').html($lnkWarning);
        $('.JSLicense .link-lock.no-txt').html($lnkLock);
        $('.JSLicense .link-unlock.no-txt').html($lnkUnlock);
        $('.JSLicense .link-settings.no-txt').html($lnkSettings);
        $('.JSLicense .link-check.no-txt').html($lnkCheck);
        $('.JSLicense .link-image.no-txt').html($lnkImage);
        $('.JSLicense .link-copy.no-txt').html($lnkCopy);
        $('.JSLicense .link-key.no-txt').html($lnkKey);
        $('.JSLicense .link-company.no-txt').html($lnkCompany);
        $('.JSLicense .link-mail.no-txt').html($lnkMail);
        $('.JSLicense .link-phone.no-txt').html($lnkPhone);
        $('.JSLicense .link-globe.no-txt').html($lnkGlobe);
        $('.JSLicense .link-quote-left.no-txt').html($lnkQuoteLeft).find('.fa').addClass($largeIcon);
        $('.JSLicense .link-quote-right.no-txt').html($lnkQuoteRight).find('.fa').addClass($largeIcon);
        $('.JSLicense .link-5-star.no-txt').html(function () {
            var $stars = '';
            for (var i = 0; i < 5; i++) $stars += $lnkStar;
            return $stars;
        });
        $('.JSLicense .link-4-star.no-txt').html(function () {
            var $stars = '';
            for (var i = 0; i < 4; i++) $stars += $lnkStar;
            return $stars;
        });
        $('.JSLicense .link-3-star.no-txt').html(function () {
            var $stars = '';
            for (var i = 0; i < 3; i++) $stars += $lnkStar;
            return $stars;
        });
        $('.JSLicense .link-2-star.no-txt').html(function () {
            var $stars = '';
            for (var i = 0; i < 2; i++) $stars += $lnkStar;
            return $stars;
        });
        $('.JSLicense .link-1-star.no-txt').html(function () {
            var $stars = '';
            for (var i = 0; i < 1; i++) $stars += $lnkStar;
            return $stars;
        });

        $('.JSLicense a.dnnFormHelp').html($lnkInfo);

        //BIG ICON ON CLOSE POPUP BUTTON
        $('.JSLicense .close-action .fa').addClass('fa-5x');

        //BOOTSTRAP FRAMEWORK
        $('.JSLicense [data-toggle="collapse"]').collapse({
            parent: false,
            toggle: false
        });

        $('.JSLicense [data-toggle="tooltip"], .JSLicense [data-toggle-tooltip="tooltip"]').tooltip({
            placement: 'auto bottom'
        });

        $('.JSLicense [data-toggle="popover"]').popover({
            trigger: 'focus' });

        //CUTTING TEXT BY ELLIPSIS PLUGIN
        //'click', 'hover', 'focus', 'click hover'
        if ($('.JSLicense .rpt-list .ellipsis').exists()) $('.JSLicense .rpt-list .ellipsis').ellipsis({
            row: 5,
            onlyFullWords: true
        });
        if ($('.JSLicense .rpt-list .ellipsis p').exists()) $('.JSLicense .rpt-list .ellipsis p').ellipsis({
            row: 5,
            onlyFullWords: true
        });

        //CUTTING TEXT BY ELLIPSIS PLUGIN
        if ($('.JSLicense .rpt-accordion .ellipsis').exists()) $('.JSLicense .rpt-accordion .ellipsis').ellipsis({
            row: 1,
            onlyFullWords: true
        });
        if ($('.JSLicense .rpt-accordion .ellipsis p').exists()) $('.JSLicense .rpt-accordion .ellipsis p').ellipsis({
            row: 1,
            onlyFullWords: true
        });

        //FANCYBOX POPUP IMAGE PLUGIN
        if ($('.JSLicense a.link-popup').exists()) $('.JSLicense a.link-popup').fancybox({
            padding: 0,
            closeClick: true,
            closeBtn: true,
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                //title: null,
                title: {
                    type: 'over' // 'float', 'inside', 'outside' or 'over'
                },
                //overlay: null,
                overlay: {
                    showEarly: false
                }
            }

        });

        //REMOVING TOOLTIPS FROM ALL DISABLED ELEMENTS
        $('.JSLicense [disbled="disabled"], .JSLicense .aspNetDisabled, .JSLicense .dnnDisabled').tooltip('destroy');

        //AUTO CLOSE POPUP PANEL
        $('.JSLicense .popup').each(function () {

            var $this = $(this),
                $timer = 0,
                $total = 4;

            if ($this.is('.auto-close-box')) {

                $this.find('.popup-wrapper').append($('<div>', { 'class': 'progress-bar' }).css('width', '0%'));

                var $interval = setInterval(function () {

                    $timer++; //$timer = ($timer + 1) % 361;

                    $this.find('.progress-bar').css('width', '100%');

                    if ($timer === $total) {
                        clearInterval($interval);
                        $('.JSLicense .popup.auto-close-box').remove();
                    }
                    //console.log($timer);
                }, 1000);
            }

            //if ($this.is('.confirm-box')) $('.JSLicense .popup.confirm-box').remove();
        });

        //DISPALY/HIDE PANEL DEFINITION
        $('.JSLicense .hidder input:checkbox').each(function () {
            var $this = $(this),
                $target = $this.parent().data('target');

            if ($this.is(':checked')) {
                $($target).show();
                $($target + '.reverse').hide();
            } else {
                $($target).hide();
                $($target + '.reverse').show();
            }
        }).bind('change', function () {
            var $this = $(this),
                $target = $this.parent().data('target');

            if ($this.is(':checked')) {
                $($target).show();
                $($target + '.reverse').hide();
            } else {
                $($target).hide();
                $($target + '.reverse').show();
            }
        });

        $('.JSLicense .unhidder input:checkbox').each(function () {
            var $this = $(this),
                $target = $this.parent().data('target');

            if ($this.is(':checked')) {
                $($target).hide();
                $($target + '.reverse').show();
            } else {
                $($target).show();
                $($target + '.reverse').hide();
            }
        }).bind('change', function () {
            var $this = $(this),
                $target = $this.parent().data('target');

            if ($this.is(':checked')) {
                $($target).hide();
                $($target + '.reverse').show();
            } else {
                $($target).show();
                $($target + '.reverse').hide();
            }
        });

        $('.JSLicense input:file').each(function () {
            var $this = $(this),
                $target = $this.data('target');

            if ($this.val() != '') {
                $($target).show();
                $($target + '.reverse').hide();
            } else {
                $($target).hide();
                $($target + '.reverse').show();
            }
        }).bind('change', function () {
            var $this = $(this),
                $target = $this.data('target');

            if ($this.val() != '') {
                $($target).show();
                $($target + '.reverse').hide();
            } else {
                $($target).hide();
                $($target + '.reverse').show();
            }
        });

        $('.JSLicense .check-equal').each(function () {
            if ($(this).val() === $(this).data('equal')) $($(this).data('target')).show();else $($(this).data('target')).hide();
        }).bind('change', function () {
            if ($(this).val() === $(this).data('equal')) $($(this).data('target')).show();else $($(this).data('target')).hide();
        });

        $('.JSLicense .check-equal-two-options').each(function () {
            if ($(this).val() === $(this).data('equal') || $(this).val() === $(this).data('equal-two')) $($(this).data('target')).show();else $($(this).data('target')).hide();
        }).bind('change', function () {
            if ($(this).val() === $(this).data('equal') || $(this).val() === $(this).data('equal-two')) $($(this).data('target')).show();else $($(this).data('target')).hide();
        });

        $('.JSLicense .uncheck-equal').each(function () {
            if ($(this).val() !== $(this).data('equal')) $($(this).data('target')).show();else $($(this).data('target')).hide();
        }).bind('change', function () {
            if ($(this).val() !== $(this).data('equal')) $($(this).data('target')).show();else $($(this).data('target')).hide();
        });

        $('.JSLicense .uncheck-equal-two-options').each(function () {
            if ($(this).val() !== $(this).data('equal') || $(this).val() !== $(this).data('equal-two')) $($(this).data('target')).show();else $($(this).data('target')).hide();
        }).bind('change', function () {
            if ($(this).val() !== $(this).data('equal') || $(this).val() !== $(this).data('equal-two')) $($(this).data('target')).show();else $($(this).data('target')).hide();
        });

        $('.JSLicense .hidder-radio-equal input:radio').each(function () {
            if ($(this).is(':checked')) {
                if ($(this).val() === $(this).closest('.hidder-radio-equal').data('equal')) $($(this).closest('.hidder-radio-equal').data('target')).show();else $($(this).closest('.hidder-radio-equal').data('target')).hide();
            }
        }).bind('change', function () {
            if ($(this).is(':checked')) {
                if ($(this).val() === $(this).closest('.hidder-radio-equal').data('equal')) $($(this).closest('.hidder-radio-equal').data('target')).show();else $($(this).closest('.hidder-radio-equal').data('target')).hide();
            }
        });

        $('.JSLicense .hidder-radio-option input:radio').each(function () {
            //if ($(this).is(':checked')) $($(this).parent().data('target')).show();
            //else $($(this).parent().data('target')).hide();
            if ($(this).is(':checked')) {
                var $groupedClass = $(this).closest('.hidder-radio-option').data('grouped-class');
                $('.JSLicense ' + $groupedClass).hide();
                $($(this).parent().data('target')).show();
            }
        }).bind('change', function () {
            if ($(this).is(':checked')) {
                var $groupedClass = $(this).closest('.hidder-radio-option').data('grouped-class');
                $('.JSLicense ' + $groupedClass).hide();
                $($(this).parent().data('target')).show();
            }
        });

        if ($('.JSLicense .color-picker').exists()) $('.JSLicense .color-picker').colorpicker({
            horizontal: true,
            format: 'rgba',
            //color: '#ededed',
            colorSelectors: {
                'default': '#777777',
                'primary': '#337ab7',
                'success': '#5cb85c',
                'info': '#5bc0de',
                'warning': '#f0ad4e',
                'danger': '#d9534f'
            }
        });

        //SELECT PICKER CUSTOM PLUGIN DEFINITION
        //SINGLE SELECT OPTIONS
        if ($('.JSLicense .selectpicker.single-select').exists()) $('.JSLicense .selectpicker.single-select').selectpicker({
            actionsBox: false,
            //container: false,
            //countSelectedText:'',
            //dropupAuto: true,
            //header: false,
            //hideDisabled: false,
            //iconBase: 'glyphicon',
            liveSearch: false,
            liveSearchPlaceholder: 'Search',
            maxOptions: 1,
            mobile: false,
            multipleSeparator: ' | ',
            noneSelectedText: 'Select',
            selectedTextFormat: 'values',
            selectOnTab: false,
            showContent: true,
            showIcon: true,
            showSubtext: false,
            showTick: true,
            size: 'auto',
            style: 'btn-primary',
            tickIcon: 'glyphicon-ok',
            title: null,
            width: '50%'
        });

        //MULTI SELECT OPTIONS
        if ($('.JSLicense .selectpicker.multi-select').exists()) $('.JSLicense .selectpicker.multi-select').selectpicker({
            actionsBox: true,
            //container: false,
            //countSelectedText:'',
            //dropupAuto: true,
            //header: false,
            //hideDisabled: false,
            //iconBase: 'glyphicon',
            liveSearch: false,
            liveSearchPlaceholder: 'Search',
            maxOptions: false,
            mobile: false,
            multipleSeparator: ' | ',
            noneSelectedText: 'Select',
            selectedTextFormat: 'count',
            selectOnTab: false,
            showContent: true,
            showIcon: true,
            showSubtext: false,
            showTick: false,
            size: 6,
            style: 'btn-primary',
            tickIcon: 'glyphicon-ok',
            title: null,
            width: '50%'
        });

        //GET PARTIAL POSTBACK ON UPDATEPANEL REFRESH
        var prm = Sys.WebForms.PageRequestManager.getInstance();

        if (prm != null) {
            prm.add_endRequest(function (sender, e) {
                if (sender._postBackSettings.panelsToUpdate != null) {
                    RefreshPostBack();
                }
            });
        };

        function RefreshPostBack() {
            $('.JSLicense .selectpicker.single-select').selectpicker({
                actionsBox: false,
                //container: false,
                //countSelectedText:'',
                //dropupAuto: true,
                //header: false,
                //hideDisabled: false,
                //iconBase: 'glyphicon',
                liveSearch: false,
                liveSearchPlaceholder: 'Search',
                maxOptions: 1,
                mobile: false,
                multipleSeparator: ' | ',
                noneSelectedText: 'Select',
                selectedTextFormat: 'values',
                selectOnTab: false,
                showContent: true,
                showIcon: true,
                showSubtext: false,
                showTick: true,
                size: 'auto',
                style: 'btn-primary',
                tickIcon: 'glyphicon-ok',
                title: null,
                width: '50%'
            });
            $('.JSLicense .selectpicker.multi-select').selectpicker({
                actionsBox: true,
                //container: false,
                //countSelectedText:'',
                //dropupAuto: true,
                //header: false,
                //hideDisabled: false,
                //iconBase: 'glyphicon',
                liveSearch: false,
                liveSearchPlaceholder: 'Search',
                maxOptions: false,
                mobile: false,
                multipleSeparator: ' | ',
                noneSelectedText: 'Select',
                selectedTextFormat: 'count',
                selectOnTab: false,
                showContent: true,
                showIcon: true,
                showSubtext: false,
                showTick: false,
                size: 6,
                style: 'btn-primary',
                tickIcon: 'glyphicon-ok',
                title: null,
                width: '50%'
            });

            $('.JSLicense .selectpicker').selectpicker('render');

            $('.JSLicense a.dnnFormHelp').html($lnkInfo);
        };

        //CHECK TO SEE IF THE WINDOW IS TOP IF NOT THEN DISPLAY BUTTON
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.JSLicense .scroll-action').fadeIn();
                //$('.JSLicense .dnnFormSectionHead').animate({ 'top': $('.JSLicense .dnnFormSectionHead').height() + 'px' }, 300).addClass('fixed');
            } else {
                    $('.JSLicense .scroll-action').fadeOut();
                    //$('.JSLicense .dnnFormSectionHead').animate({ 'top': '-=76' }, 300).removeClass('fixed');
                }
        });

        //CLICK EVENT TO SCROLL TO TOP
        $('.JSLicense .scroll-action').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 300);
            return false;
        });
    });
})(jQuery, window.Sys);

