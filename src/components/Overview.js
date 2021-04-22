import React from 'react';
import StoreIcon from '@material-ui/icons/Store';
import SearchIcon from '@material-ui/icons/Search';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

const Overview = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm">
                        <SearchIcon
                            fontSize={'large'}
                            style={{ color: '#008060' }}
                        />
                        <p className="mt-3">
                            Find all the best vegan and vegtarian finds in the
                            city, all added by people living there. Discover all
                            the best and latest snacks, drinks, meals, and
                            grocery supplies.
                        </p>
                    </div>
                    <div className="col-sm">
                        <StoreIcon
                            fontSize={'large'}
                            style={{ color: '#008060' }}
                        />
                        <p className="mt-3">
                            Convience stores, grocery marts, everywhere.
                            Discover the best vegan and vegetarian finds Seoul
                            has to offer.
                        </p>
                    </div>
                    <div className="col-sm">
                        <LibraryAddIcon
                            fontSize={'large'}
                            style={{ color: '#008060' }}
                        />
                        <p className="mt-3">
                            Join the community and add your own. We are free to
                            join and always will be. This project is built for
                            everyone!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Overview;
