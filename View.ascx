<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="JS.Modules.JSLicense.View" %>
<%@ Register TagName="label" TagPrefix="dnn" Src="~/controls/LabelControl.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<dnn:DnnCssInclude ID="bxSliderCss" runat="server" FilePath="//cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/jquery.bxslider.min.css" />
<dnn:DnnCssInclude ID="fontAwesomeCss" runat="server" FilePath="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" />


<div class="JSLicense">
    <div class="view">  

        <%--FIRST CONTROLS--%>
        <asp:Panel ID="pnlFirstButton" runat="server" CssClass="btn-group">
            <asp:LinkButton ID="lnkFirstButton" runat="server" CssClass="btn btn-primary link-lock"
                ResourceKey="lnkFirstButton" OnClick="lnkFirstButton_Click" />
        </asp:Panel>

        <%--EDIT MODE GROUP BUTTONS--%>
        <asp:Panel ID="pnlAdmin" runat="server" Visible="true" CssClass="pnl-admin">
            <div class="btn-group" role="group" aria-label="Control buttons">
                <asp:Label ID="lblContentHolder" runat="server" />
                <asp:Label ID="lblContentHolderActivate" runat="server" />

                <asp:LinkButton ID="lnkCheckLicenseKey" runat="server"
                    OnClick="lnkCheckLicenseKey_Click" />
                <asp:LinkButton ID="lnkGetOwnerInfo" runat="server"
                    OnClick="lnkMoreInfo_Click" />

                <asp:HyperLink ID="lnkSettings" runat="server" CssClass="btn btn-primary link-settings no-txt"
                    ResourceKey="lnkSettings" ToolTip="Settings" />

            </div>
        </asp:Panel>

        <div>
            <h3>
                <asp:Label ID="lblTableTitle" runat="server" ResourceKey="lblTableTitle" />
            </h3>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>
                            <asp:Label runat="server" ResourceKey="thNumber" />
                        </th>
                        <th>
                            <asp:Label runat="server" ResourceKey="thBuyer" />
                        </th>
                        <th>
                            <asp:Label runat="server" ResourceKey="thModule" />
                        </th>
                        <th>
                            <asp:Label runat="server" ResourceKey="thInstallKey" />
                        </th>
                        <th>
                            <asp:Label runat="server" ResourceKey="thStatus" />
                        </th>
                        <%--<th>
                        <asp:Label runat="server" ResourceKey="thPublic" />
                    </th>--%>
                    </tr>
                </thead>
                <tbody>
                    <asp:TableRow ID="tableRow" runat="server">
                        <asp:TableCell>
                            <asp:Label ID="TextBox1" runat="server" CssClass="ellipsis"
                                Text='0' />
                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:HyperLink ID="lblOwner" runat="server" CssClass="ellipsis group"
                                Text="JoopSOFT Ltd." NavigateUrl="http://www.joopsoft.com" Target="_blank"
                                data-toggle="tooltip" ToolTip="www.joopsoft.com" />
                            <asp:LinkButton ID="lnkMoreInfo" runat="server" CssClass="btn btn-primary link-info no-txt"
                                data-toggle="tooltip" ToolTip="Owner Info"
                                OnClick="lnkMoreInfo_Click" />

                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:Label ID="txtModule" runat="server" CssClass="ellipsis"
                                Text='JSFAQ Module' />
                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:Label ID="lblInstallKey" runat="server" CssClass="ellipsis group"
                                Text='123' />
                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:Label ID="txtStatus" runat="server" CssClass="ellipsis group link-unlock alert-success"
                                Text='Activated' />
                            <asp:HyperLink ID="lnkGetConfirmKey" runat="server" CssClass="btn btn-success link-key no-txt"
                                data-toggle="tooltip" ToolTip="Get Confirmation Key" resourceKey="lnkGetConfirmKey" />
                        </asp:TableCell>
                    </asp:TableRow>

                    <asp:TableRow ID="tableRow1" runat="server">
                        <asp:TableCell>
                            <asp:Label ID="Label1" runat="server" CssClass="ellipsis"
                                Text='1' />
                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:HyperLink ID="HyperLink1" runat="server" CssClass="ellipsis group"
                                Text="JoopSOFT Ltd." NavigateUrl="http://www.joopsoft.com" Target="_blank"
                                data-toggle="tooltip" ToolTip="www.joopsoft.com" />
                            <asp:LinkButton ID="LinkButton2" runat="server" CssClass="btn btn-primary link-info no-txt"
                                data-toggle="tooltip" ToolTip="Owner Info"
                                OnClick="lnkMoreInfo_Click" />

                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:Label ID="Label6" runat="server" CssClass="ellipsis"
                                Text='JSTestimonials Module' />
                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:Label ID="Label7" runat="server" CssClass="ellipsis group"
                                Text='456' />
                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:HyperLink ID="lnkActiveModule" runat="server" CssClass="btn btn-danger link-lock"
                                data-toggle="tooltip" ToolTip="Activate Module" resourceKey="lnkActiveModule" />

                        </asp:TableCell>
                    </asp:TableRow>

                    <asp:TableRow ID="tableRow2" runat="server">
                        <asp:TableCell>
                            <asp:Label ID="Label22" runat="server" CssClass="ellipsis"
                                Text='2' />
                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:HyperLink ID="HyperLink2" runat="server" CssClass="ellipsis group"
                                Text="JoopSOFT Ltd." NavigateUrl="http://www.joopsoft.com" Target="_blank"
                                data-toggle="tooltip" ToolTip="www.joopsoft.com" />
                            <asp:LinkButton ID="LinkButton3" runat="server" CssClass="btn btn-primary link-info no-txt"
                                data-toggle="tooltip" ToolTip="Owner Info"
                                OnClick="lnkMoreInfo_Click" />

                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:Label ID="Label612" runat="server" CssClass="ellipsis"
                                Text='JSRotator Module' />
                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:Label ID="Label74" runat="server" CssClass="ellipsis group"
                                Text='789' />
                        </asp:TableCell>
                        <asp:TableCell>
                            <asp:HyperLink ID="lnkActiveModule3" runat="server" CssClass="btn btn-warning link-warning"
                                data-toggle="tooltip" ToolTip="In Progress" resourceKey="lnkProgressModule" />

                        </asp:TableCell>
                    </asp:TableRow>

                    <asp:Repeater ID="rptImageList" runat="server">
                        <HeaderTemplate>
                        </HeaderTemplate>
                        <ItemTemplate>
                            <asp:TableRow ID="tableRow" runat="server">
                                <asp:TableCell>
                                    <asp:TextBox ID="TextBox1" runat="server" CssClass="ellipsis"
                                        Enabled="false" data-toggle="tooltip" ToolTip="Edit Title"
                                        Text='0' />
                                </asp:TableCell>
                                <asp:TableCell>
                                    <asp:TextBox ID="txtBuyer" runat="server" CssClass="ellipsis"
                                        Enabled="false" data-toggle="tooltip" ToolTip="Edit Title"
                                        Text='Iliya Devedjiev' />
                                </asp:TableCell>
                                <asp:TableCell>
                                    <asp:TextBox ID="txtModule" runat="server" CssClass="ellipsis"
                                        Enabled="false" data-toggle="tooltip" ToolTip="Edit Description"
                                        Text='JSFAQ Module' />
                                </asp:TableCell>
                                <asp:TableCell>
                                    <asp:TextBox ID="txtInstallKey" runat="server" CssClass="ellipsis"
                                        Enabled="false" data-toggle="tooltip" ToolTip="Edit Photographer"
                                        Text='4klj3434253jkFDf35' />
                                </asp:TableCell>
                                <asp:TableCell>
                                    <asp:TextBox ID="txtStatus" runat="server" CssClass="ellipsis"
                                        Enabled="false" data-toggle="tooltip" ToolTip="Edit E-mail"
                                        Text='Activated' />
                                </asp:TableCell>
                                <asp:TableCell>
                                
                                </asp:TableCell>
                                <asp:TableCell>

                                </asp:TableCell>
                            </asp:TableRow>
                        </ItemTemplate>
                        <FooterTemplate>
                        </FooterTemplate>
                    </asp:Repeater>
                </tbody>
            </table>
        </div>

        <%--POPUP--%>
        <asp:Panel ID="pnlPopUp" runat="server" Visible="false" CssClass="popup overlay">
            <div class="popup-wrapper">
                <asp:Label ID="lblPopUpIcon" runat="server" />
                <h3>
                    <asp:Label ID="lblPopUpTitle" runat="server" CssClass="popup-msg" />
                </h3>

                <asp:Panel ID="pnlInputGroups" runat="server" CssClass="input-group">
                    <asp:Label ID="lblKey" runat="server" CssClass="input-group-addon"
                        ClientIDMode="Static" />
                    <asp:TextBox ID="txtKey" runat="server" CssClass="form-control" Enabled="true"
                        aria-describedby="lblKey"
                        Placeholder="Enter Installed Key" />
                    <span class="input-group-btn">
                        <asp:HyperLink ID="lnkSubmit" runat="server" CssClass="btn btn-primary link-key no-txt"
                            data-toggle="tooltip" />
                    </span>
                </asp:Panel>

                <asp:Panel ID="pnlAlerts" runat="server" CssClass="alert alert-danger alert-dismissible">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true" class="link-close no-txt">&times;</span>
                    </button>
                    <asp:Label ID="lblPopUpMsg" runat="server"
                        Text="Error messaging status text.." />
                </asp:Panel>

                <asp:Panel ID="pnlButtonGroups" runat="server" CssClass="btn-group" role="group" aria-label="Control buttons">
                    <asp:LinkButton ID="btnGenConfirmKey" runat="server" CssClass="btn btn-primary link-key"
                        ResourceKey="btnGenConfirmKey"
                        data-toggle="tooltip" ToolTip="Generate Confirm Key" />

                    <asp:LinkButton ID="btnActivateModule" runat="server" CssClass="btn btn-primary link-lock"
                        ResourceKey="btnActivateModule"
                        data-toggle="tooltip" ToolTip="Activate Module" />

                    <asp:HyperLink ID="lnkOwnerInfo" runat="server" CssClass="btn btn-primary link-info"
                        href="#pnlOwnerInfo" aria-expanded="false" ResourceKey="lnkOwnerInfo"
                        data-toggle="collapse" data-toggle-tooltip="tooltip" ToolTip="Owner Info" />
                </asp:Panel>

                <asp:Panel ID="pnlOwnerInfo" runat="server" ClientIDMode="Static">
                    <div class="owner-wrapper">
                        <asp:Label ID="lblInfoInstalledKey" runat="server" />
                        <asp:Label ID="lblInfoConfirmKey" runat="server" />
                        <asp:Label ID="lblInfoCompany" runat="server" />
                        <asp:Label ID="lblInfoEmail" runat="server" />
                        <asp:Label ID="lblInfoCellPhone" runat="server" />
                        <asp:Label ID="lblInfoDomain" runat="server" />
                    </div>
                </asp:Panel>


                <asp:LinkButton ID="btnClose" runat="server" CssClass="close-action btn btn-danger link-close no-txt"
                    data-toggle="tooltip" ToolTip="Close" OnClick="btnClose_Click" />
            </div>
        </asp:Panel>
    </div>
</div>

<script type="text/javascript">
    (function ($, Sys) {
        
        $('.JSLicense #<%= lnkOwnerInfo.ClientID %>').bind('click', function () {
            $(this).toggleClass('active');
        });

    })(jQuery, window.Sys);

</script>


<dnn:DnnJsInclude ID="bxSliderJs" runat="server" FilePath="//cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/jquery.bxslider.min.js" Priority="16" />
<dnn:DnnJsInclude ID="ellipsisJs" runat="server" FilePath="~/DesktopModules/JSLicense/Js/jquery.ellipsis.min.js" Priority="17" />
<dnn:DnnJsInclude ID="bootstrapJs" runat="server" FilePath="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js" Priority="18" />
<dnn:DnnJsInclude ID="zeroClipboardJs" runat="server" FilePath="//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.min.js" Priority="19" />
<dnn:DnnJsInclude ID="bootstrapSelectJs" runat="server" FilePath="//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js" Priority="20" />
<dnn:DnnJsInclude ID="bootstrapColorPickerJs" runat="server" FilePath="//cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.3.3/js/bootstrap-colorpicker.min.js" Priority="21" />
<dnn:DnnJsInclude ID="mainJs" runat="server" FilePath="~/DesktopModules/JSLicense/Js/main.min.js" Priority="22" />
