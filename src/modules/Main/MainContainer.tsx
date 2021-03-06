import { Button, CssBaseline, Grid } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';

import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators } from "redux";
// redux
import * as listingActions from "modules/Listing/ListingActions";
import { RootState } from "redux/rootReducer";
// components
import PrivateWrapper from 'components/PrivateWrapper/PrivateWrapper';
import ListingTable from "modules/Listing/comp/ListingTable";
import BaseContainer from "hoc/BaseContainer";



const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
    },

    buttonContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },

    button: {
        marginBottom: 15,
    },
});

interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
    // listings?: Listing[];
    //actions?: typeof listingActions;
}

class MainContainer extends React.Component<Props> {

    componentDidMount() {
        // this.props.actions.getListingAction();
    }


    render() {
        const { classes } = this.props;

        return (
            <PrivateWrapper>
                <Grid container className={classes.root}>

                    <CssBaseline />
                </Grid>
            </PrivateWrapper>
        );
    }
}



function mapStateToProps(state: RootState) {
    return {
        //listings: state.listing.list,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        //actions: bindActionCreators(listingActions, dispatch),
    };
}


const Main = BaseContainer(MainContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));
