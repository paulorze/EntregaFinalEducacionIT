import { Grid, Skeleton, Stack } from '@mui/material';
import styles from './MovieDetailSkeleton.module.css';

const MovieDetailSkeletonContainer = ({theme}) => {

    return (
        <Grid
            container
            component={'main'}
            className={styles.main}
            sx={{
                backgroundColor: theme.palette.background.default
            }}
        >
            <Grid
                item
                xs={12}
                p={1}
                >
                <Stack
                    direction={'column'}
                >
                    <Skeleton
                        width={'100%'}
                        height={75}
                        my={2}
                    />
                    <Skeleton
                        width={'100%'}
                        height={75}
                        my={2}
                    />
                </Stack>
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                        p={1}
                    >
                        <Skeleton
                            width={'100%'}
                            height={425}
                            my={2}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        p={1}
                    >
                        <Stack
                            className={styles.stack}
                        >
                            <Skeleton
                                width={'100%'}
                                height={30}
                                my={2}
                            />
                            <Skeleton
                                width={'100%'}
                                height={30}
                                my={2}
                            />
                            <Skeleton
                                width={'100%'}
                                height={30}
                                my={2}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MovieDetailSkeletonContainer;