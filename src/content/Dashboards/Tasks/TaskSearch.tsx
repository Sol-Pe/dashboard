import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Grid,
  Box,
  FormControl,
  CardActions,
  Typography,
  Avatar,
  Divider,
  Rating,
  OutlinedInput,
  Chip,
  Tooltip,
  AvatarGroup,
  Pagination,
  InputAdornment,
  Menu,
  MenuItem,
  styled,
  useTheme
} from '@mui/material';
import { formatDistance, subMonths, subDays } from 'date-fns';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import Link from 'src/components/Link';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Text from 'src/components/Text';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
    padding-right: ${theme.spacing(0.7)}
`
);

function TaskSearch() {
  const theme = useTheme();

  const handleDelete = () => {};

  const handleClick = () => {};

  const periods = [
    {
      value: 'popular',
      text: 'Most popular'
    },
    {
      value: 'recent',
      text: 'Recent tasks'
    },
    {
      value: 'updated',
      text: 'Latest updated tasks'
    },
    {
      value: 'oldest',
      text: 'Oldest tasks first'
    }
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[0].text);

  return (
    <>
      <FormControl variant="outlined" fullWidth>
        <OutlinedInputWrapper
          type="text"
          placeholder="Search terms here..."
          endAdornment={
            <InputAdornment position="end">
              <Button variant="contained" size="small">
                Search
              </Button>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <Box
        py={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle2">
            Showing{' '}
            <Text color="black">
              <b>57 tasks</b>
            </Text>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography
            variant="subtitle2"
            sx={{
              pr: 1
            }}
          >
            Sort by:
          </Typography>
          <Button
            size="small"
            variant="outlined"
            ref={actionRef1}
            onClick={() => setOpenMenuPeriod(true)}
            endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
          >
            {period}
          </Button>
          <Menu
            disableScrollLock
            anchorEl={actionRef1.current}
            onClose={() => setOpenMenuPeriod(false)}
            open={openPeriod}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            {periods.map((_period) => (
              <MenuItem
                key={_period.value}
                onClick={() => {
                  setPeriod(_period.text);
                  setOpenMenuPeriod(false);
                }}
              >
                {_period.text}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{
              p: 3,
              background: `${theme.colors.alpha.black[5]}`
            }}
          >
            <Box>
              <Rating value={4} defaultValue={5} precision={1} readOnly />
            </Box>
            <Link href="#" variant="h3" color="text.primary">
              Add a new product to inventory and update stock levels
            </Link>
            <Box
              sx={{
                py: 2
              }}
            >
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Stock"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="New Product"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Box>
            <Typography
              sx={{
                pb: 2
              }}
              color="text.secondary"
            >
              Need to add a new product to their inventory system, including the product name, description, price, and any relevant images or videos. Also need to update the stock levels to ensure they have enough inventory on hand to fulfill customer orders.
            </Typography>
            <Button size="small" variant="contained">
              View task
            </Button>
            <Divider
              sx={{
                my: 2
              }}
            />
            <CardActions
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                variant="subtitle2"
              >
                <TodayTwoToneIcon
                  sx={{
                    mr: 1
                  }}
                />
                {formatDistance(subDays(new Date(), 24), new Date(), {
                  addSuffix: true
                })}
              </Typography>
              <AvatarGroup>
                <Tooltip arrow title={`$"View profile for')} Remy Sharp`}>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Remy Sharp"
                    src="/static/images/avatars/3.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Trevor Henderson">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Trevor Henderson"
                    src="/static/images/avatars/4.jpg"
                  />
                </Tooltip>
              </AvatarGroup>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{
              p: 3,
              background: `${theme.colors.alpha.black[5]}`
            }}
          >
            <Box>
              <Rating value={4} defaultValue={5} precision={1} readOnly />
            </Box>
            <Link href="#" variant="h3" color="text.primary">
              Process a payment and issue a receipt
            </Link>
            <Box
              sx={{
                py: 2
              }}
            >
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Website"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Integrations"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Box>
            <Typography
              sx={{
                pb: 2
              }}
              color="text.secondary"
            >
               I need to be able to process payments quickly and efficiently. I'll use my payment processing system to enter the customer's payment information, verify the payment, and issue a receipt. This will help me keep track of all my transactions and ensure that my customers have a smooth and hassle-free payment experience.
            </Typography>
            <Button size="small" variant="contained">
              View task
            </Button>
            <Divider
              sx={{
                my: 2
              }}
            />
            <CardActions
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                variant="subtitle2"
              >
                <TodayTwoToneIcon
                  sx={{
                    mr: 1
                  }}
                />
                {formatDistance(subMonths(new Date(), 2), new Date(), {
                  addSuffix: true
                })}
              </Typography>
              <AvatarGroup>
                <Tooltip arrow title="View profile for Remy Sharp">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Remy Sharp"
                    src="/static/images/avatars/2.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Travis Howard">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Travis Howard"
                    src="/static/images/avatars/3.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Trevor Henderson">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Trevor Henderson"
                    src="/static/images/avatars/4.jpg"
                  />
                </Tooltip>
              </AvatarGroup>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{
              p: 3,
              background: `${theme.colors.alpha.black[5]}`
            }}
          >
            <Box>
              <Rating value={4} defaultValue={5} precision={1} readOnly />
            </Box>
            <Link href="#" variant="h3" color="text.primary">
              Improve website on mobile and tablet devices
            </Link>
            <Box
              sx={{
                py: 2
              }}
            >
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Website"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Integrations"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Box>
            <Typography
              sx={{
                pb: 2
              }}
              color="text.secondary"
            >
               I need to update and optimize my website to increase sales, enhance user experience, and stay competitive. This involves improving the design, speed, accessibility, and functionality of the website. By continuously improving my website, I can provide a better online shopping experience and achieve business success.
            </Typography>
            <Button size="small" variant="contained">
              View task
            </Button>
            <Divider
              sx={{
                my: 2
              }}
            />
            <CardActions
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                variant="subtitle2"
              >
                <TodayTwoToneIcon
                  sx={{
                    mr: 1
                  }}
                />
                {formatDistance(subDays(new Date(), 31), new Date(), {
                  addSuffix: true
                })}
              </Typography>
              <AvatarGroup>
                <Tooltip arrow title="View profile for Remy Sharp">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Remy Sharp"
                    src="/static/images/avatars/1.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Travis Howard">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Travis Howard"
                    src="/static/images/avatars/2.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Trevor Henderson">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Trevor Henderson"
                    src="/static/images/avatars/5.jpg"
                  />
                </Tooltip>
              </AvatarGroup>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 4
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pagination
          showFirstButton
          showLastButton
          count={15}
          defaultPage={6}
          siblingCount={0}
          size="large"
          shape="rounded"
          color="primary"
        />
      </Box>
    </>
  );
}

export default TaskSearch;
